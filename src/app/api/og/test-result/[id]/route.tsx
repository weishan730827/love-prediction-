import { ImageResponse } from 'next/og';
import { validateTestId } from '@/app/test-analysis/utils/validation';
import { ApiError, API_ERRORS } from '@/app/test-analysis/utils/error';
import type { TestResult, Dimension } from '@/app/test-analysis/types';

interface ApiResponse {
  success: boolean;
  data?: TestResult;
  error?: string;
}

export const runtime = 'edge';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // 验证ID
    const error = validateTestId(id);
    if (error) {
      throw new ApiError(error, 400, 'INVALID_ID');
    }

    // 获取测试结果数据
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/test-results/${id}`
    );

    if (!response.ok) {
      throw new ApiError(
        API_ERRORS.SERVER_ERROR,
        response.status
      );
    }

    const { success, data } = await response.json() as ApiResponse;

    if (!success || !data) {
      throw new ApiError(
        API_ERRORS.NOT_FOUND,
        404
      );
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              color: '#2563eb',
              marginBottom: '20px',
            }}
          >
            {data.overallScore}%
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#4b5563',
              marginBottom: '40px',
            }}
          >
            契合度测试结果
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {data.dimensions.slice(0, 3).map((dim: Dimension) => (
              <div
                key={dim.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: 24, color: '#2563eb' }}>
                  {dim.score}%
                </div>
                <div style={{ fontSize: 16, color: '#6b7280' }}>
                  {dim.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error('生成分享图片失败:', error);
    if (error instanceof ApiError) {
      return new Response(error.message, { status: error.status });
    }
    return new Response(API_ERRORS.SERVER_ERROR, { status: 500 });
  }
} 