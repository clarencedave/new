import React from 'react';
import Layout from '../components/layout';
function BlogPost() {
    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
            <div>
                hello post
        </div>
        </Layout>
    )
}
export default BlogPost

