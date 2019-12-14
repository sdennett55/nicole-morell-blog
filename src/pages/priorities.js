import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrioritiesPage = () => (
  <Layout>
    <SEO title="Priorities" keywords={[`nicole`, `morell`, `priorities`]} />
    <h1 className="Main-title">Priorities</h1>
    <main className="Main-body">
      <h2 className="Main-subtitle">Sustainable, community-led development</h2>
      <ul>
        <li class="Body-listItem">
          Strengthen communication pathways, giving citizens a stronger voice in
          future development
          <ul>
            <li class="Body-listItem">
              Fund a full-time communications professional to manage the city
              website and outreach to inform citizens of important hearings
              related to development, ordinances, and budget
            </li>
            <li class="Body-listItem">
              Create a public comment portal for residents to share concerns on
              specific issues and have them delivered to relevant offices and
              officials. Utilize communications professional to follow up on
              issues and interface with residents
            </li>
          </ul>
        </li>
        <li class="Body-listItem">
          Revise Medford's zoning ordinance to create a comprehensive plan for
          our city
          <ul>
            <li class="Body-listItem">
              Work with a zoning consultant to create a full plan for zoning in
              the city, balancing commercial and residential to meet housing and
              fiscal needs
            </li>
          </ul>
        </li>
        <li class="Body-listItem">
          Draft zoning to create sustainable development from a human,
          environmental, and fiscal view point
          <ul>
            <li class="Body-listItem">
              Require new large developments to include traffic management plans
              to mitigate the impact of new development on traffic and
              congestion
            </li>
            <li class="Body-listItem">
              Work with developers to add public green space, use of renewable
              energy sources, and access to alternative transportation
            </li>
            <li class="Body-listItem">
              Understand the fiscal impact of new development on the city
              including the balance of new costs for city services versus tax
              revenue and the impacts of the ratio of commercial to residential
              development
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="Main-subtitle">Housing</h2>
      <ul>
        <li class="Body-listItem">
          Expand senior tax deferrals so that our neighbors can afford to stay
          in their homes
          <ul>
            <li class="Body-listItem">
              Senior tax deferrals allow seniors to defer payment of real estate
              tax payments until their death or sale of their homes. Medford’s
              current annual income limit to qualify is $25,000. I will advocate
              for raising this to $40,000 to reflect the overall high cost of
              living in our area that effects those on fixed incomes
            </li>
          </ul>
        </li>
        <li class="Body-listItem">
          Expand inclusionary zoning so first time home buyers have the
          opportunity to buy in Medford
          <ul>
            <li class="Body-listItem">
              Medford’s recently passed inclusionary zoning requires new
              developments of 10 units or more to have at least 10% be
              affordable and developments of over 50 units have 15% affordable
              The definition of affordable is for a household making up to 80%
              of the area median income (AMI). I am in favor of decreasing this
              to six units that will require 10% to be affordable. I would also
              explore setting aside some of these units or additional units for
              households making up to 60% of AMI to ensure that those in
              substantial need have an opportunity for this housing.
            </li>
            <li class="Body-listItem">
              This allows for more affordability, but also helps the city have
              more control over development by maintain the state-mandated
              affordable housing ratio
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="Main-subtitle">Infrastructure investment</h2>
      <ul>
        <li class="Body-listItem">
          Ensure basic maintenance funding for our public buildings
          <ul>
            <li class="Body-listItem">
              Work with the city budget to create a standing line item funding
              maintenance staff for municipal buildings to ensure their upkeep
            </li>
          </ul>
        </li>
        <li class="Body-listItem">
          Increase safety for pedestrians, cyclists, and drivers{" "}
          <ul>
            <li class="Body-listItem">
              Increase and maintain crosswalks in the city and explore adding
              additional multiuse paths for pedestrians and cyclists to travel
              safely throughout Medford
            </li>
            <li class="Body-listItem">
              Increase number of secure bike parking throughout city to
              encourage alternative means of travel
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="Main-subtitle">Supporting open and green space</h2>
      <ul>
        <li class="Body-listItem">
          Increase our tree canopy throughout Medford
          <ul>
            <li class="Body-listItem">
              Through grants and budgeting, I will work to increase our tree
              canopy through the city and protect existing mature growth trees.
              Tree coverage and green space benefit both mental and physical
              health of our residents
            </li>
          </ul>
        </li>
        <li class="Body-listItem">
          Require developers to add public green space in future projects
          <ul>
            <li class="Body-listItem">
              Draft ordinance to require developments to include green space
              and/or trees within their site plan to increase quality of life
              for residents and mitigate impact of new buildings
            </li>
          </ul>
        </li>
      </ul>
    </main>
  </Layout>
)

export default PrioritiesPage
