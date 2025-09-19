import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const FreeFallChart = () => {
  // 自由落體實驗數據
  const data = [
    { time: 0.00, height: 0.00000 },
    { time: 0.05, height: 0.01225 },
    { time: 0.10, height: 0.04900 },
    { time: 0.15, height: 0.11025 },
    { time: 0.20, height: 0.19600 },
    { time: 0.25, height: 0.30625 },
    { time: 0.30, height: 0.44100 },
    { time: 0.35, height: 0.60025 },
    { time: 0.40, height: 0.78400 },
    { time: 0.45, height: 0.99225 },
    { time: 0.50, height: 1.22500 },
    { time: 0.55, height: 1.48225 },
    { time: 0.60, height: 1.76400 },
    { time: 0.65, height: 2.07025 }
  ];

  // 計算理論擬合曲線 (假設g=9.8 m/s²)
  const generateFitCurve = () => {
    const fitData = [];
    for (let t = 0; t <= 0.65; t += 0.01) {
      const h = 0.5 * 9.8 * t * t; // h = (1/2) * g * t²
      fitData.push({ time: parseFloat(t.toFixed(2)), height: parseFloat(h.toFixed(5)) });
    }
    return fitData;
  };

  const fitCurve = generateFitCurve();

  return (
    <div className="w-full p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          自由落體運動 x-y 圖表
        </h2>
        <p className="text-center text-gray-600">
          橫軸：時間 (秒) | 縱軸：高度 (米)
        </p>
      </div>

      {/* 主圖表 */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="time" 
              type="number"
              scale="linear"
              domain={[0, 0.7]}
              tick={{ fontSize: 12 }}
              label={{ value: '時間 (秒)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              label={{ value: '高度 (米)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${parseFloat(value).toFixed(5)} 米`, 
                name === 'height' ? '實驗數據' : '理論曲線'
              ]}
              labelFormatter={(value) => `時間: ${parseFloat(value).toFixed(2)} 秒`}
            />
            <Legend />
            
            {/* 實驗數據點 */}
            <Line 
              type="monotone" 
              dataKey="height" 
              stroke="#2563eb" 
              strokeWidth={3}
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 6 }}
              name="實驗數據"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 帶理論曲線的對比圖 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          實驗數據與理論曲線對比
        </h3>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              type="number"
              scale="linear"
              domain={[0, 0.7]}
              tick={{ fontSize: 12 }}
              label={{ value: '時間 (秒)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              label={{ value: '高度 (米)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value, name) => [
                `${parseFloat(value).toFixed(5)} 米`, 
                name === 'height' ? '實驗數據' : '理論曲線 (g=9.8)'
              ]}
              labelFormatter={(value) => `時間: ${parseFloat(value).toFixed(2)} 秒`}
            />
            <Legend />
            
            {/* 理論擬合曲線 */}
            <Line 
              data={fitCurve}
              type="monotone" 
              dataKey="height" 
              stroke="#dc2626" 
              strokeWidth={2}
              dot={false}
              name="理論曲線 (g=9.8)"
            />
            
            {/* 實驗數據點 */}
            <Line 
              data={data}
              type="monotone" 
              dataKey="height" 
              stroke="#2563eb" 
              strokeWidth={0}
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 6 }}
              name="實驗數據"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 數據表格 */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          實驗數據表
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  序號
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  時間 (秒)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  高度 (米)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  理論值 (米)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  差值 (米)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((point, index) => {
                const theoretical = 0.5 * 9.8 * point.time * point.time;
                const difference = point.height - theoretical;
                return (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {point.time.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {point.height.toFixed(5)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {theoretical.toFixed(5)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className={difference >= 0 ? 'text-red-600' : 'text-blue-600'}>
                        {difference >= 0 ? '+' : ''}{difference.toFixed(5)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 統計信息 */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">統計摘要</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600">數據點數:</span>
            <span className="ml-2 text-gray-900">{data.length}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">時間範圍:</span>
            <span className="ml-2 text-gray-900">0.00-0.65 秒</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">高度範圍:</span>
            <span className="ml-2 text-gray-900">0.00-2.07 米</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">理論公式:</span>
            <span className="ml-2 text-gray-900">h = ½gt²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeFallChart;