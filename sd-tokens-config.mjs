import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['./tokens/sd-*.json'], // Tokens Studio 에서 추출한 토큰 (split-tokens.js로 생성된 파일들)
  // preprocessors: ['tokens-studio'],
  // platforms: {
  //   css: {
  //     transformGroup: 'tokens-studio', // <-- apply the tokens-studio transformGroup to apply all transforms
  //     transforms: ['name/kebab'], // 만들어질 token 이름 형태, 기본값 camel
  //     buildPath: './tokens/', // 생성될 파일 경로
  //     files: [
  //       {
  //         destination: 'new-tokens.json', // 반환될 토큰 파일 이름
  //         format: 'json',
  //       },
  //     ],
  //   },
  // },

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