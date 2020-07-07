class Carousel {
  constructor(element) {
      this.el = element;
      this.leftButton = this.el.querySelector('.left-button');
      this.rightButton = this.el.querySelector('.right-button');
      this.img = this.el.querySelectorAll('img')
      this.index = 0;
      this.rightButton.addEventListener('click', () => this.goRight());
      this.leftButton.addEventListener('click', () => this.goLeft());
      this.imgArray = Array.from(this.img).map( img => new CarouselImg(img));
  }

  goLeft() {
      if (this.index === 0) {
          this.index = this.img.length - 1;
      } else {
          this.index--;
      }
      
      this.imgArray.forEach( (img, index) => {
          if (index !== this.index) {
              img.hide();
          }
      });
    
      this.imgArray[this.index].show();
      TweenMax.fromTo("img", 0.5, {x:900}, {x:0, ease:Back.easeOut}, );
  }
  goRight() {
      if (this.index < this.img.length - 1) {
          this.index ++;
      } else {
          this.index = 0;
      }

      this.imgArray.forEach((img, index) => {
          if (index !== this.index) {
              img.hide();
          }
      });
    
      this.imgArray[this.index].show();
      TweenMax.fromTo("img", 0.5, {x:-900}, {x:0, ease:Back.easeOut}, );
  }
}


class CarouselImg {
  constructor(image) {
      this.image = image;
  }
  show() {
      this.image.style.display = 'block';
      this.image.classList.add('fadeIn');
  }
  hide() {
      this.image.style.display = 'none';
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);


