import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {MeetNicoleImage} from "../components/image"

const MeetNicolePage = () => (
  <Layout>
    <SEO title="Meet Nicole" keywords={[`meet`, `nicole`, `morell`]} />
    <h1 className="Main-title">Meet Nicole</h1>
    <div className="Body">
      <div className="Body-imageWrap">
        <MeetNicoleImage className="Body-image" />
      </div>
      <div className="Body-copy">
        <p>I live in West Medford with my husband Jeff and our rescue pit bull, Greta. You can usually find us exploring the Fells or the rest of Medford on foot. Stop us and say “hi!” I’d love to meet you and hear your story — and your ideas about the future we share in Medford.</p>

        <p>I grew up in Fall River and am a proud graduate of the public school system. I hold a bachelor of arts in journalism from the University of Rhode Island, graduating with highest honors and minoring in economics and political science.</p>

        <p>I’ve spent my career in digital media as a writer, social media manager, and strategist. Since 2014, I have worked at MIT and currently work in the Office of Sustainability as a communications specialist. It's my job to communicate the hard work MIT is doing to address issues like climate change, use of resources, and sustainable food and waste systems. </p>

        <p>My work focuses on understanding and communicating individual stories, high level research, and complex concepts. The ability to become a topic expert in a short time and share the importance of news and research are skills that help me stand out as a candidate for city council.</p>

        <p>For the past five years, I have volunteered as a mentor with the Read to a Child program, working with public school children who benefit from additional reading time. I also volunteer my time as a member of Medford’s Energy and Environment Committee, advocating for a green and sustainable future for the city. I am also working with women throughout the city to help establish Medford’s first women’s commission by ordinance.</p>

        <h2 className="Main-subTitle">More about Nicole</h2>

        <p><strong>I was raised with a focus on civic engagement and public service. </strong></p>

        <p>My parents were public servants: my mom was a special education teacher at a public school for 35 years and for more than 30 years, my dad ran a community nonprofit that connected low-income residents with much-needed services.</p>

        <p>Our family’s conversations around the dinner table often focused on the challenges faced by residents in our community and the programs, solutions, and legislation that could help create a better future. These conversations taught me to be involved, engaged, and of service to my community — a lesson that has stayed with me throughout my life.</p>

        <p>As a city councilor, I want to engage our community members to create a strong, resilient Medford for all. I will push for community-led development, smart support of our infrastructure, protection of the green space that makes Medford so unique, and strong investment in our future.</p>
      </div>
    </div>
  </Layout>
)

export default MeetNicolePage
