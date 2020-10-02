// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

console.log(reviews);

const btn1 = document.querySelector('button.next-btn');
const btn2 = document.querySelector('button.prev-btn');
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const randomBtn = document.querySelector('.random-btn');
//console.log(img.src)

let count = 0;

window.addEventListener('DOMContentLoaded', (Event) => {
  console.log('content loaded')
  setProfile(img, author, job, info, reviews, count)
})

btn1.addEventListener('click', () => {
  getProfile();
});

btn2.addEventListener('click', () => {
  getProfileInReverse();
});

const getProfile = () => {
  count++
  if (count > reviews.length - 1) {
    count = 0
  }
  setProfile(img, author, job, info, reviews, count);

}

//set profile of selected person
const setProfile = (img, author, job, info, arr, num) => {
  img.src = arr[num].img;
  author.textContent = arr[num].name;
  job.textContent = arr[num].job;
  info.textContent = arr[num].text;

}

//get previous person
const getProfileInReverse = () => {
  count--
  if (count < 0) {
    count = reviews.length - 1
  }
  setProfile(img, author, job, info, reviews, count)
}

//get random profile
randomBtn.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random() * reviews.length);
  let randomProfile = reviews[randomNum];
  console.log(randomProfile)
  img.src = randomProfile.img;
  author.textContent = randomProfile.name;
  job.textContent = randomProfile.job;
  info.textContent = randomProfile.text;
})