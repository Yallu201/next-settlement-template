const resizerUrl = 'https://v4.img.sinsang.market?f=';

// 흰색 배경 없이 잘라주는 리사이즈 비율
// 리스트 썸네일  작은 상품사진 : 375 * 500
// 신상베스트 같이 조금 큰거  : 696 * 928

export const STANDARD_SIZE = {
  S: {
    width: 375,
    height: 500,
  },
  M: {
    width: 696,
    height: 928,
  },
  L: {
    width: 750,
    height: 1000,
  },
};

// 모바일에서 이용하고 있는 리사이저 규격 문서 https://dealicious.atlassian.net/wiki/spaces/PIFCG/pages/733282314

/**
 * 이미지 리사이저 주소
 * @param imgUrl
 * @param width
 * @param height
 */
export const resizeImage = (imgUrl: string, width = 375, height = 500, rs = '') => {
  return `${resizerUrl}${imgUrl}&w=${width}&h=${height}&rs=${rs}`;
};

/**
 * 리사이저 붙은 이미지 -> 원본 이미지 주소
 * @param resizedImgUrl
 */
export const resizeImgOrigin = (resizedImgUrl: string) => {
  return resizedImgUrl.replace(resizerUrl, '').split('&w=')[0];
};
