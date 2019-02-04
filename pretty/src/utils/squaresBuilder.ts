interface Square {
  id: string;
  image?: string;
  text?: string;
}

export const buildUrl = (image: string) => {
  const imagePrefix = 'https://scontent-lhr3-1.cdninstagram.com/vp/';
  const middlefix = '/t51.2885-15/e35/';
  const imageSuffix = '_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com';
  const parts = image.split('§');

  return `${imagePrefix}${parts[0]}${middlefix}${parts[1]}${imageSuffix}`
};

export const getImageUrl = (id: string, images: string[]) => buildUrl(images.filter(image => ~image.indexOf(id))[0]);

export const getSquares = (images: string[]) => images.map((image, index) => {
  const linkSquares = ['About', 'Contact', 'Inspiration'];
  const getImageId = (image: string) => image.split('/', 2)[1].split('§', 1)[0];

  if ([3, 6, 9].includes(index)) {
    return {
      id: linkSquares[(index / 3 - 1)].toLowerCase(),
      text: linkSquares[(index / 3 - 1)],
    }
  } else {
    return {
      id: `post/${getImageId(image)}`,
      image: buildUrl(image),
    };
  }
});
