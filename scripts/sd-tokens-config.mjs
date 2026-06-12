import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['./tokens/sd-*.json'],
  platforms: {
    tailwindCss: {
      transformGroup: 'css', // 토큰 경로를 --css-variable 형태로 자동 변환
      buildPath: 'app/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables', // CSS 변수 파일로 저장
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();