const data = [
    {
        type: 'Acrylic',
        title: 'VIBRANT',
        title2: 'HUES',
        description: 'Acrylic paintings are known for their vibrant colors and versatility. This medium allows for a range of textures and techniques, making it a favorite among contemporary artists. It dries quickly, enabling artists to layer colors and create dynamic compositions.',
        image: 'https://kbmusee.github.io/kbmusee/1.JPG'
    },
    {
        type: 'Watercolor',
        title: 'TRANSPARENT',
        title2: 'BEAUTY',
        description: 'Watercolor painting is admired for its delicate and translucent qualities. Artists use water to blend colors seamlessly, creating ethereal effects and soft gradients. This medium is often used to capture landscapes, botanicals, and expressive portraits.',
        image: 'https://kbmusee.github.io/kbmusee/2.JPG'
    },
    {
        type: 'Ink Wash Painting',
        title: 'MONOCHROME',
        title2: 'ELEGANCE',
        description: 'Ink wash painting, also known as literati painting, emphasizes simplicity and expressiveness. It uses varying tones of black ink on paper or silk to create depth and contrast. This traditional Asian art form often depicts natural scenes, animals, and calligraphy.',
        image: 'https://kbmusee.github.io/kbmusee/3.JPG'
    },
    {
        type: 'Traditional Chinese Realistic Painting',
        title: 'METICULOUS',
        title2: 'DETAIL',
        description: 'Traditional Chinese realistic painting, also known as Gongbi, is characterized by its precise and detailed brushwork. It often features intricate depictions of flora, fauna, and historical figures, capturing the beauty and elegance of each subject with remarkable accuracy.',
        image: 'https://kbmusee.github.io/kbmusee/6.JPG'
    },
    {
        type: 'Sumi-e',
        title: 'ZEN',
        title2: 'ARTISTRY',
        description: 'Sumi-e is a Japanese ink painting technique that embodies Zen principles. It focuses on the beauty of simplicity, using minimal brushstrokes to convey the essence of a subject. Common themes include bamboo, plum blossoms, landscapes, and animals.',
        image: 'https://kbmusee.github.io/kbmusee/4.JPG'
    },
    {
        type: 'Digital',
        title: 'MODERN',
        title2: 'CREATIVITY',
        description: 'Digital art encompasses a wide range of styles and techniques, created using digital tools and software. This medium offers endless possibilities for experimentation and innovation, allowing artists to create intricate designs, animations, and interactive works.',
        image: 'https://kbmusee.github.io/kbmusee/8.JPG'
    },
    {
        type: 'Sketch',
        title: 'RAW',
        title2: 'ESSENCE',
        description: 'Sketching captures the raw essence of an idea with quick, expressive lines. It is often the first step in the creative process, allowing artists to explore compositions and forms. Sketches can range from simple outlines to detailed studies, showcasing the artist\'s skill and vision.',
        image: 'https://kbmusee.github.io/kbmusee/7.png'
    },
    {
        type: 'Pastel',
        title: 'SOFT',
        title2: 'TONES',
        description: 'Pastel artwork is known for its soft, velvety texture and rich, vibrant colors. Artists use pastel sticks to apply pigment directly to paper, blending and layering to achieve depth and luminosity. This medium is popular for portraits, landscapes, and still lifes.',
        image: 'https://kbmusee.github.io/kbmusee/9.jpg'
    }
];

const data_hourly = [
    {
        type: '2 Hour Painting Sessions',
        title: 'EXPRESSIVE',
        title2: 'BRUSHSTROKES',
        description: 'Dive into the world of expressive painting with our hourly sessions focused on dynamic techniques using both brush and palette knife. These sessions help you capture emotion and movement on canvas, perfect for both beginners and experienced artists looking to explore new styles.',
        image: 'https://kbmusee.github.io/gallery/01.png'
    },
    {
        type: '2 Hour Painting Sessions',
        title: 'COLOR',
        title2: 'THEORY',
        description: 'Enhance your understanding of color through our hourly painting sessions dedicated to color theory. Learn how to mix and match colors to create harmonious compositions, and understand the psychological impact of different hues and shades.',
        image: 'https://kbmusee.github.io/gallery/02.JPG'
    },
    {
        type: '2 Hour Painting Sessions',
        title: 'LANDSCAPE',
        title2: 'PAINTING',
        description: 'Join our landscape painting sessions to capture the beauty of nature on canvas. Whether working from photographs or en plein air, you\'ll learn techniques for depicting light, shadow, and the varied textures of natural scenes.',
        image: 'https://kbmusee.github.io/gallery/03.JPG'
    },
    {
        type: '2 Hour Painting Sessions',
        title: 'PORTRAIT',
        title2: 'TECHNIQUES',
        description: 'Our portrait painting sessions focus on the intricacies of capturing human likeness and emotion. Learn about proportion, anatomy, and the subtle details that bring portraits to life, perfect for artists at any skill level.',
        image: 'https://kbmusee.github.io/gallery/04.JPG'
    },
    {
        type: '2 Hour Painting Sessions',
        title: 'STILL LIFE',
        title2: 'COMPOSITIONS',
        description: 'Explore the art of still life painting in our focused sessions. Study composition, lighting, and texture as you create detailed and realistic representations of everyday objects. These sessions are ideal for honing observational skills and technique.',
        image: 'https://kbmusee.github.io/gallery/05.JPG'
    },
    {
        type: 'Online Painting Sessions',
        title: 'VIRTUAL',
        title2: 'ARTISTRY',
        description: 'Join our online painting sessions to enhance your skills from the comfort of your home. These virtual classes cover various techniques and styles, allowing you to interact with instructors and peers in real-time while exploring your creative potential.',
        image: 'https://kbmusee.github.io/gallery/06.png'
    }
];

const data_after_school = [
    {
        type: 'After School Classes',
        title: 'CREATIVE',
        title2: 'EXPLORATION',
        description: 'Our after school classes provide a space for young artists to explore their creativity. Students experiment with various mediums and techniques, fostering artistic expression and developing foundational skills in a supportive environment.',
        image: 'https://kbmusee.github.io/gallery/07.JPG'
    },
    {
        type: 'After School Classes',
        title: 'FUN',
        title2: 'WITH COLORS',
        description: 'These classes focus on the joy of painting, where students can play with vibrant colors and learn about color mixing and theory. It\'s a great way for kids to express themselves and build confidence in their artistic abilities.',
        image: 'https://kbmusee.github.io/gallery/08.JPG'
    },
    {
        type: 'After School Classes',
        title: 'SKETCH',
        title2: 'TECHNIQUES',
        description: 'In our sketch classes, students will learn the fundamentals of drawing, including line, shading, and perspective. These sessions help young artists develop their technical skills and transform their ideas into detailed sketches.',
        image: 'https://kbmusee.github.io/gallery/09.png'
    },
    {
        type: 'After School Classes',
        title: 'NATURE',
        title2: 'INSPIRED',
        description: 'These classes are designed for young artists who love nature. Students will learn to draw and paint plants, animals, and landscapes, developing their observation skills and appreciation for the natural world.',
        image: 'https://kbmusee.github.io/gallery/010.png'
    },
    {
        type: 'After School Classes',
        title: 'COLLABORATIVE',
        title2: 'PROJECTS',
        description: 'Students work together on large-scale projects, learning the value of teamwork and collaboration. These projects can range from murals to group sculptures, encouraging social interaction and collective creativity.',
        image: 'https://kbmusee.github.io/gallery/011.png'
    }
];

const data_weekly = [
    {
        type: 'Weekly Art Classes',
        title: 'DRAWING',
        title2: 'FUNDAMENTALS',
        description: 'Our weekly drawing classes cover the essential techniques for creating detailed and realistic drawings. Students learn about line work, shading, and perspective, building a strong foundation for their artistic journey.',
        image: 'https://kbmusee.github.io/kbmusee/012.JPG'
    },
    {
        type: 'Weekly Art Classes',
        title: 'PAINTING',
        title2: 'MASTERCLASS',
        description: 'Join our painting masterclass to refine your skills and explore advanced techniques. These weekly sessions focus on various styles and mediums, allowing students to experiment and develop their unique artistic voice.',
        image: 'https://kbmusee.github.io/kbmusee/013.JPG'
    },
    {
        type: 'Weekly Art Classes',
        title: 'SCULPTURE',
        title2: 'STUDIES',
        description: 'Our sculpture classes provide hands-on experience with different materials and techniques. Students will learn to create three-dimensional art pieces, from initial concept to finished sculpture, exploring both traditional and contemporary styles.',
        image: 'https://kbmusee.github.io/kbmusee/014.jpg'
    },
    {
        type: 'Weekly Art Classes',
        title: 'MIXED MEDIA',
        title2: 'EXPERIMENTS',
        description: 'These classes encourage creativity and innovation through mixed media art. Students combine different materials and techniques to create unique pieces, learning to push the boundaries of traditional art forms.',
        image: 'https://kbmusee.github.io/kbmusee/015.png'
    },
    {
        type: 'Weekly Art Classes',
        title: 'FIGURE',
        title2: 'DRAWING',
        description: 'Figure drawing classes focus on capturing the human form with accuracy and expression. Students will learn about anatomy, proportion, and gesture to create dynamic and lifelike drawings.',
        image: 'https://kbmusee.github.io/kbmusee/016.png'
    }
];

const _ = (id) => document.getElementById(id);

function renderCards(data) {
    const cards = data.map((i, index) =>
        `<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`
    ).join('');

    const cardContents = data.map((i, index) =>
        `<div class="card-content" id="card-content-${index}">
            <div class="content-start"></div>
            <div class="content-type">${i.type}</div>
            <div class="content-title-1">${i.title}</div>
            <div class="content-title-2">${i.title2}</div>
        </div>`
    ).join('');

    const slideNumbers = data.map((_, index) =>
        `<div class="item" id="slide-item-${index}">${index + 1}</div>`
    ).join('');

    _('demo').innerHTML = cards + cardContents;
    _('slide-numbers').innerHTML = slideNumbers;

    init();
}

function handleNavClick(event) {
    switch (event.target.id) {
        case 'hourly-sessions-btn':
            renderCards(data_hourly);
            break;
        case 'after-school-classes-btn':
            renderCards(data_after_school);
            break;
        case 'weekly-art-classes-btn':
            renderCards(data_weekly);
            break;
        default:
            renderCards(data);
            break;
    }
}

// Add event listeners to navigation buttons
document.getElementById('hourly-sessions-btn').addEventListener('click', handleNavClick);
document.getElementById('after-school-classes-btn').addEventListener('click', handleNavClick);
document.getElementById('weekly-art-classes-btn').addEventListener('click', handleNavClick);

// Initial render
renderCards(data);


const range = (n) =>
  Array(n)
    .fill(0)
    .map((i, j) => i + j);
const set = gsap.set;

function getCard(index) {
  return `#card${index}`;
}
function getCardContent(index) {
  return `#card-content-${index}`;
}
function getSliderItem(index) {
  return `#slide-item-${index}`;
}

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, {
      ...properties,
      duration: duration,
      onComplete: resolve,
    });
  });
}

let order = [0, 1, 2, 3, 4, 5];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  gsap.set("#pagination", {
    top: offsetTop + 330,
    left: offsetLeft,
    y: 200,
    opacity: 0,
    zIndex: 60,
  });
  gsap.set("nav", { y: -200, opacity: 0 });

  gsap.set(getCard(active), {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { y: 100 });
  gsap.set(`${detailsInactive} .title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .desc`, { y: 50 });
  gsap.set(`${detailsInactive} .cta`, { y: 60 });

  gsap.set(".progress-sub-foreground", {
    width: 500 * (1 / order.length) * (active + 1),
  });

  rest.forEach((i, index) => {
    gsap.set(getCard(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      zIndex: 30,
      borderRadius: 10,
    });
    gsap.set(getCardContent(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      zIndex: 40,
      y: offsetTop + cardHeight - 100,
    });
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
  });

  gsap.set(".indicator", { x: -window.innerWidth });

  const startDelay = 0.6;

  gsap.to(".cover", {
    x: width + 400,
    delay: 0.5,
    ease,
    onComplete: () => {
      setTimeout(() => {
        loop();
      }, 500);
    },
  });
  rest.forEach((i, index) => {
    gsap.to(getCard(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 30,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
    gsap.to(getCardContent(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 40,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
  });
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step() {
  return new Promise((resolve) => {
    order.push(order.shift());
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    document.querySelector(`${detailsActive} .type-box .text`).textContent =
      data[order[0]].type;
    document.querySelector(`${detailsActive} .title-1`).textContent =
      data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent =
      data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent =
      data[order[0]].description;

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
    gsap.to(`${detailsActive} .text`, {
      y: 0,
      delay: 0.1,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-1`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-2`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .desc`, {
      y: 0,
      delay: 0.3,
      duration: 0.4,
      ease,
    });
    gsap.to(`${detailsActive} .cta`, {
      y: 0,
      delay: 0.35,
      duration: 0.4,
      onComplete: resolve,
      ease,
    });
    gsap.set(detailsInactive, { zIndex: 12 });

    const [active, ...rest] = order;
    const prv = rest[rest.length - 1];

    gsap.set(getCard(prv), { zIndex: 10 });
    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(prv), { scale: 1.5, ease });

    gsap.to(getCardContent(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
    });
    gsap.to(getSliderItem(active), { x: 0, ease });
    gsap.to(getSliderItem(prv), { x: -numberSize, ease });
    gsap.to(".progress-sub-foreground", {
      width: 500 * (1 / order.length) * (active + 1),
      ease,
    });

    gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
        gsap.set(getCard(prv), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

        gsap.set(getCardContent(prv), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });
        clicks -= 1;
        if (clicks > 0) {
          step();
        }
      },
    });

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap);
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          ease,
          delay: 0.1 * (index + 1),
        });

        gsap.to(getCardContent(i), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
          ease,
          delay: 0.1 * (index + 1),
        });
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
      }
    });
  });
}

async function loop() {
  await animate(".indicator", 2, { x: 0 });
  await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
  set(".indicator", { x: -window.innerWidth });
  await step();
  loop();
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}

async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}

start()