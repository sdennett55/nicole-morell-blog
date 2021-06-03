import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrioritiesPage = () => (
  <Layout>
    <SEO title="Priorities" keywords={[`nicole`, `morell`, `priorities`, 'accomplishments']} />
    <h1 className="Main-title">Priorities and Accomplishments</h1>
    <main className="Main-body">
      <h2 class="Main-subtitle">Key First Term Accomplishments</h2>
      <ul>
        <li class="Body-listItem">
          Introduced and passed resolution to raise income cap on Senior Tax Deferrals
        </li>
        <li class="Body-listItem">
          Fought to fully fund Emergency Rental Assistance for Medford residents impacted by COVID-19
        </li>
        <li class="Body-listItem">
          Pushed for key zoning changes and funding for city projects to support multi-modal, sustainable transportation
        </li>
        <li class="Body-listItem">
          Advocated for solar arrays on development projects; called for reinstatement and expansion of key bus routes in Medford
        </li>
        <li class="Body-listItem">
          Prioritized zoning change that now permits breweries in Medford
        </li>
        <li class="Body-listItem">
          Voted in favor of CPA funding for city park upgrades including tree canopy repopulating in parks
        </li>
        <li class="Body-listItem">
          Introduced now-funded line item to support translation services for city communications
        </li>
        <li class="Body-listItem">
          Co-sponsored resolution declaring systemic racism a public health crisis
        </li>
      </ul>
      <h2 class="Main-subtitle">Priorities for Next Term</h2>
      <p>
        <strong>Housing</strong>: Expand inclusionary zoning to make homeownership possible for more residents; allow for residential exemption so residents can continue to call Medford home
      </p>
      <p>
        <strong>Sustainability and transportation</strong>: Sustainable zoning and resilient building standards to support a climate ready Medford; support safe streets for all through redesign, zoning, and people-centered development projects
      </p>
      <p>
        <strong>Vibrant Squares and Green Space</strong>: Smart development and zoning improvements to support lively, pedestrian-friendly squares across the city; codify language to enhance our tree canopy and pervious surface to reduce impacts of heat islands, flooding, and increase curb appeal
      </p>
      <p>
        <strong>Community</strong>: Continue to support a welcoming and accessible City Hall through translation services/interpreters, increased meeting access, and community outreach to ensure all voices are represented in city decisions
      </p>
    </main>
  </Layout>
)

export default PrioritiesPage
