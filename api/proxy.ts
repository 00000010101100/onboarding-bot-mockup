import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // OPTIONS 요청 처리 (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // URL 파라미터에서 실제 요청할 엔드포인트 가져오기
  const { url, ...rest } = req.query;
  
  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    // n8n webhook으로 요청 전달
    const targetUrl = `https://n8n-test.poc.letsur.ai${url}`;
    
    console.log(`Proxying request to: ${targetUrl}`);
    console.log(`Method: ${req.method}`);
    console.log(`Body:`, req.body);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        // 필요한 경우 추가 헤더 전달
        ...(req.headers.authorization && { Authorization: req.headers.authorization as string }),
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' 
        ? JSON.stringify(req.body) 
        : undefined,
    });

    const data = await response.json();
    
    return res.status(response.status).json(data);
  } catch (error: any) {
    console.error('Proxy error:', error);
    return res.status(500).json({ 
      error: 'Proxy error', 
      message: error.message 
    });
  }
}

