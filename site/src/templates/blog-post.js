import React from 'react';
import Helmet from 'react-helmet';


export default function Template({data})
{
    const {markdownRemark: post} = data;
    //const post = data.markdownRemark;
    return(
        <div>
            <h1>{post.frontmatter.title}</h1>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostbyPath($path: String!)
    {
        markdownremark(frontmatter: {path: {eq: $path}})
        {
            html
            frontmatter{
                path
                title
            }
        }
    }
`