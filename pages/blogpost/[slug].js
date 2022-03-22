import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';
import { useEffect, useState } from 'react';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  console.log('check blog data', blog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div style={{ textAlign: 'justify', color: '#0000FF	' }}>
          {blog && blog.content}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query);
  // const router = useRouter();
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);

  let myBlog = await data.json();

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default slug;
