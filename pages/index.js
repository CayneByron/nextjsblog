import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

export default function Index({ preview, allPosts }) {

  const heroPost = allPosts.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  })[0];

  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`{ this too shall parse }`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  console.log('getStaticProps');
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  
  console.log(allPosts);
  return {
    props: { preview, allPosts },
  }
}
