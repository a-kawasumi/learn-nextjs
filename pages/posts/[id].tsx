import Layout from "../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

interface Props {
  postData: PostData;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

// server側でbuild時に実行, pageのみ使用可能
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

// pageをrenderingする時に必要なdataを先に取得, dataはpublicにキャッシュされる
// server側でbuild時に実行されるため、query, headerは取得不可
// P -> getStaticPropsの返り値の型, Q -> getStaticPropsの引数contextの内部の型
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  // 外部apiをfetchする場合はここでリクエストする
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params!.id);
  return {
    props: {
      postData,
    },
    // ISRすると生的サイトの更新が出来る
    revalidate: 10, // seconds
  };
};

const Post: React.VFC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData?.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
      </article>
    </Layout>
  );
};

export default Post;
