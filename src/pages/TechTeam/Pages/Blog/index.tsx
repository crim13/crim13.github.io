import THeader from "../Header";
import FeaturedImg from "./featuredimg.jpg";
import Posts from "../Content/DB/Posts";
import SectionThree from "../Content/SectionThree";

import $ from "./index.module.css";
import $G from "../../GlobalStyles/global.module.css";

const Blog = () => (
  <>
    <THeader
      caption="Blog"
      heading="Check our insights and ideas."
      image={FeaturedImg}
    />

    <div className={$.BlogWrapper}>
      <p className={$G.TCaption}>Blog</p>
      <h1 className={$G.THeading}>Check our insights</h1>
      {Posts.map((post) => (
        <div className={$.PostCard}>
          <div className={$.PostCardMetaWrapper}>
            <div>
              <img src={post.image} alt="postImage" />
            </div>
            <div className={$.PostCardMeta}>
              <h3 className={$G.TParagraph}>{post.text}</h3>
              <p className={$G.TCaption}>{post.name}</p>
              <p>{post.time}</p>
            </div>
          </div>
          <button className={`${$.Button}`}>
            <span className={`${$G.ArrDiag} ${$.LinkButton}`}></span>
          </button>
        </div>
      ))}
    </div>
    <SectionThree />
  </>
);
export default Blog;
