import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import PageArticles from "../components/PageArticles"

const Address = styled.address`
  font-size: 1.2em;
  display: flex;
  flex-direction: column;

  a {
    border: none;
    text-decoration: none;
    &::before {
      padding-right: 0.6rem;
    }
    padding: 0.6rem;
  }
  a[href^="mailto"]::before {
    content: "📧";
  }
  a[href^="tel"]::before {
    content: "📞";
  }
`
const FamlyBtn = styled.a`
  border-bottom: 0;
  padding: 1rem;
  background-color: rgb(92, 52, 163);
  border-radius: .4rem;
  color: white;
`
const Section = styled.section`
  padding: 2rem 0;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "contactPage" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
            }
            html
          }
        }
      }
      file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const articles = [...data.allFile.nodes]
  return (
    <Layout>
      <Hero
        fluidImage={data.file.childImageSharp.fluid}
        imageAlt=""
        tagLine="Contact us"
      />
      <article>
        <p>If you would like to register your interest in joining, please use our online enquiries form</p>
            <FamlyBtn href="https://app.famly.co/#/inquiry?institutionId=f5ad277b-c0be-4e97-9d30-5f454e95958e&hmac=7f3acac530b8c4f16505968feebd3b0a83928d05ba4e1d1069e686c57bb3ab13&locale=en_GB">
              Register online
            </FamlyBtn>
        <Section>
          <Address>
            <a href="mailto:office@southwatervillagepreschool.org">
              office@southwatervillagepreschool.org
            </a>
            <a href="tel:01403733954">01403 733954</a>
            <p>
              Southwater Village Hall Pre-School <br /> Church Lane <br />
              Southwater <br /> West Sussex <br /> RH13 9BT
            </p>
          </Address>
        </Section>
        <Section>
          <iframe
            title="southwater village preschool"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=southwater%20village%20hall+(Southwater%20Village%20Preschool)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Section>
      </article>
      <PageArticles listOfArticles={articles} />
    </Layout>
  )
}

export default Contact
