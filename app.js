const jobSeekers = [
    {
        name: "Ahmed Ali",
        jobDescription: "Senior Software Developer",
        review: "Ahmed is an experienced software developer specializing in full-stack web applications. He has a strong grasp of modern programming languages and frameworks, allowing him to create efficient and scalable solutions. His attention to detail and ability to troubleshoot complex issues make him an invaluable asset to any team.",
        image: "img 1.webp"
    },
    {
        name: "Sara Khan",
        img: "img 2.avif",
        jobDescription: "Graphic Designer",
        review: "Sara is a talented graphic designer with expertise in UI/UX design and brand identity. She excels in creating visually appealing designs that resonate with target audiences. Her creative approach and ability to work collaboratively with clients ensure that every project reflects their vision and exceeds expectations.",
        image: "img 2.avif"
    },
    {
        name: "Bilal Zafar",
        jobDescription: "Digital Marketing Specialist",
        review: "Bilal is a skilled digital marketer with a strong focus on SEO, content strategy, and social media management. His analytical mindset allows him to develop data-driven strategies that enhance brand visibility and engagement. He is passionate about staying updated with industry trends and continuously optimizing campaigns for better results.",
        image: "img 3.jpg"
    },
    {
        name: "Fatima Sheikh",
        jobDescription: "Human Resource Specialist",
        review: "Fatima is a dedicated human resource specialist with extensive experience in recruitment and talent management. She has a knack for identifying the right candidates for the job and ensuring a smooth onboarding process. Her compassionate approach and excellent communication skills foster a positive work environment, making her a great asset to any organization.",
        image: "img 4.jpg"
    },
    {
        name: "Omar Qureshi",
        jobDescription: "Project Manager",
        review: "Omar is an accomplished project manager with a proven track record in agile methodologies and team leadership. His organizational skills and strategic thinking enable him to drive projects to successful completion within deadlines and budgets. Omar is known for his ability to motivate teams and improve processes, leading to increased productivity.",
        image: "img 5.jpg"
    }
];

let count = 0;
let picture = document.querySelector(".img")
let Name = document.querySelector(".name")
let jobTitle = document.querySelector(".jobTitle")
let review = document.querySelector(".review")


function nextHandler() {
    console.log("Chala")
    count++
    if (count >= jobSeekers.length) count = 0
    updateContent()
}
function previousHandler() {
    console.log("Chala")
    count--
    if (count < 0) count = jobSeekers.length - 1
    updateContent()
}

function updateContent() {
    Name.innerHTML = jobSeekers[count].name
    picture.src = jobSeekers[count].image
    jobTitle.innerHTML = jobSeekers[count].jobDescription
    review.innerHTML = jobSeekers[count].review
}
