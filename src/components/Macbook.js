import React from 'react';

export class Macbook extends React.Component {

  constructor(props) {
    super(props);

    this.img = "";
    this.context = ""
  }

  componentDidMount() {
    this.preloadImages();
    this.img = new Image();
    this.img.src = this.currentFrame(1);

    console.log(this.img)
  }

  preloadImages = () => {
    const frameCount = 148;

    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = this.currentFrame(i);
    }
  };

  currentFrame = index => (
    `https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_${index.toString().padStart(4, '0')}.jpg`
  )

  updateImage = index => {
    this.img.src = this.currentFrame(index);
    this.context.drawImage(this.img, 0, 0);
  }

  render() {
    const html = document.documentElement;

    window.addEventListener('scroll', () => {
      const frameCount = 148;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => this.updateImage(frameIndex + 1))
    });


    return (
      <canvas id="hero-lightpass" ref={(c) => this.context = c.getContext('2d')} height="770px" width="1158px" style={{ position: "fixed", top: '10%', zIndex: 10 }} />
    )
  }
}