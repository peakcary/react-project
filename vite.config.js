import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // 确保使用 JSX loader
    include: /src\/.*\.jsx?$/, // 应用于所有 .js 和 .jsx 文件
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 确保解析这些扩展名的文件
  },
});
