import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo:
      "https://s3-alpha.figma.com/hub/file/6055265191/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://static.dezeen.com/uploads/2025/05/amazon-rebrand-2025_dezeen_2364_col_1-1.jpg",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://s3-alpha.figma.com/hub/file/5388452724/888ad143-5a02-49cc-8642-f94240b67589-cover.png",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    datePosted: "3 days ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India",
  },
  {
    brandLogo:
      "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Chennai, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210729021049",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.jpg?width=1200&format=pjpg&optimize=medium",
    company: "Adobe",
    datePosted: "4 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlchGazIN-x-d0aU5nWxiW9tmnJWgXxmBIlw&s",
    company: "Uber",
    datePosted: "8 days ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Delhi, India",
  },
  {
    brandLogo:
      "https://static.vecteezy.com/system/resources/previews/020/190/699/non_2x/nvidia-logo-nvidia-icon-free-free-vector.jpg",
    company: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://thumbs.dreamstime.com/b/tesla-logo-tesla-logo-american-company-gigafactory-template-273034006.jpg",
    company: "Tesla",
    datePosted: "7 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Remote",
  },
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card logo={elem.brandLogo} company={elem.company} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      })}
    </div>
  )
}

export default App
