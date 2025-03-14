export const BlogContent = [
  {
    id: 1,
    bigTitle: "Extracting accurate commodities export data",
    slug: 'extracting-accurate-commodities-export-data',
    img: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Extracting accurate commodities export data",
    desc: "See how sieve address data quality issues that previously led to production breakages/stoppages for a group of commodities-focused investors",
    content: (
      <>
        <h1 className="text-3xl py-3 font-bold  mt-3">
          Context
        </h1>
        <p className="pb-5 leading-relaxed">  
        The data engineer/portfolio manager duo we worked with focused on trading commodities. They wanted up-to-date export informaation that wasn't available on the market. The delay on vendors' feeds were too much for the team to tolerate - so they planned to collect the data themselves.
        </p>
        <h1 className="text-3xl font-bold py-3">Issues</h1>
        <p className="pb-5 leading-relaxed">
          Real-time data collection was a pain. Their scripts were automatically trawling the web to find new export data published by various countries. Inconsistenties in formatting and content often broke the team's parser.
          A breakage in production resulted in a 5:30 am pagerduty notification to the Data Engineer, Tom, who would implement a quick fix.
          The 5:30 quick fixes always came down to Tom finding the source documents, translating and reading them himself, and manually backfilling the correct values into the database.
          Actual fixes to the parser took way longer and couldn't be done in real time.
        </p>
        <h1 className="text-3xl py-3 font-bold ">sieve solution</h1>
        <p className="pb-5 leading-relaxed">
          We built an API endpoint for Tom to fetch human-validated data when his automated parsing failed. The API endpoint takes information about the relevant resource and the desired data points, and can be called in the very same code paths that would otherwise escalate errors for human review.
        </p>
      </>
    ),
  },
  {
    id: 2,
    bigTitle: "Verifying financial filing data",
    slug: 'verifying-filing-data',
    img: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Verifying financial filing data",
    desc: "A team of quant researchers were plagues by missing and incorrect data in an (expensive) feed of SEC filing data. Learn how Sieve saves multiple hours of research work per day",
    content: (
      <>
        <h1 className="text-3xl py-3 font-bold  mt-3">
          Context
        </h1>
        <p className="pb-5 leading-relaxed">
          A quant research team at a leading systematic fund was using SEC filing data in their trading models.
          Their issues were simple but painful and persistent. Very often, the data would be missing, inaccurate, or have typos.
        </p>
        <h1 className="text-3xl font-bold py-3">Issues</h1>
        <p className="pb-5 leading-relaxed">
          Without better options, the QR team personally hunted down data issues for 3+ hours every morning.
          Their data ingestion process would implement basic outlier detection and would send an email detailing failed checks to the QR team every morning.
          Every single morning, the QRs needed to refer to this email, compare the flagged data points with publicly available references, and play phone tag with the data vendor to get them to reissue to feed with corrections. 
          All before they could get to their day job of quant research.
        </p>
        <h1 className="text-3xl py-3 font-bold ">sieve solution</h1>
        <p className="pb-5 leading-relaxed">
          We built an API endpoint that lets the team query for specific data from financial filings. All the requesters need to provide are the relevant ticker, reporting period, and desired metrics.
          Behind the scenes, sieve finds the right document, uses AI to extract the requested data points, and forwards the data to a team of human reviewers.
          After careful human review to ensure accuracy, the data is returned to the requester via the API.
          This replaces hours of researcher time hunting down and verifying data every morning, and lets them focus on their research.
        </p>
      </>
    ),
  },
  {
    id: 3,
    bigTitle: "Bitcoin metric tracking",
    slug: 'bitcoin-metric-tracking',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Bitcoin metric tracking",
    desc: "See how sieve helped an investor pull reliable, properly-formatted data from sell-side reports",
    content: (
      <>
        <h1 className="text-3xl py-3 font-bold  mt-3">
          Context
        </h1>
        <p className="pb-5 leading-relaxed">
          Reid is a equities investor trading bitcoin mining companies. 
          His strategy involves keeping up to date with the latest metrics (e.g., hashrate) of miners across the industry.
        </p>
        <h1 className="text-3xl font-bold py-3">Issues</h1>
        <p className="pb-5 leading-relaxed">
          Reid's best source of this data comes from sell-side analyst reports, which are often sent in PDF format. 
          Although he is technical in other areas, it seems that Reid's best option to use his analyst report data is to manually transcribe the data from PDF to excel.
          This is cubersome, error-prone, and blocks his goals of real-time tracking and alerting, since the process is bottlenecked on him finding time to transcribe the data.
        </p>
        <h1 className="text-3xl py-3 font-bold ">sieve solution</h1>
        <p className="pb-5 leading-relaxed">
          We built Reid an API endpoint to which he can supply links to publicly available documents, or supply his own documents, and received consistently formatted, human-verified data extracted from the files.
          Behind the scenes, sieve finds the right document, uses AI to extract the requested data points, and forwards the data to a team of human reviewers.
          After careful human review to ensure accuracy, the data is returned to the Reid via the API.
          This opens up a world of real-time monitoring and alerting possibilities that allow Reid to react more quickly in the wake of new information.
        </p>
      </>
    ),
  },
  {
    id: 4,
    bigTitle: "ESG data collection",
    slug: 'ESG-data-collection',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "ESG data collection",
    desc: "See how sieve saved a top ESG investor weeks of work collecting and verifying ESG data pulled from fiancial filings",
    content: (
      <>
        <h1 className="text-3xl py-3 font-bold  mt-3">
          Context
        </h1>
        <p className="pb-5 leading-relaxed">
          Ryan is a data scientist at a leading ESG-focused fund. To improve their selection methodology, the research team wanted to gather new data on companies' environmental, social, and governance (ESG) metrics.
          The team evaluated traditional data vendors, but found the cost, quality, and licensing terms to be unacceptable, so they decided to build in-house.
        </p>
        <h1 className="text-3xl font-bold py-3">Issues</h1>
        <p className="pb-5 leading-relaxed">
          As a data scientist, Ryan's initial approach was to use frontier LLM models (e.g., Claude, OpenAI) to extract data from financial filings.
          However, the models were not able to extract the data they needed from the financial filings to the necessary degree of accuracy.
          Ryan spent weeks manually checking the data between source documents and LLM outputs to confirm correctness. This process was time-consuming and error-prone.
          He had to make a tradeoff between how thoroughly he checked the data, and how much of the data he could get to.
          In every batch, he'd check the first few documents rigoroursly, really looking closely at the source document. Of course, this level of fine-grained review would not scale to all the companies in their coverage universe.
          From then on, he'd skim the documents, and then would skim every tenth document. This made the process more scalable, but clearly less comprehensive.
          Ryan and his team wanted a scalable solution that wouldn't burden them with manual review.
        </p>
        <h1 className="text-3xl py-3 font-bold ">sieve solution</h1>
        <p className="pb-5 leading-relaxed">
          We built a set of scripts for Ryan that let him configure the companies and metrics he cared about, and used the sieve API to retrieve the data asynchronously.
          Behind the scenes, sieve finds the right document, uses AI to extract the requested data points, and forwards the data to a team of human reviewers.
          After careful human review to ensure accuracy, the data is returned to the Reid via the API.
          This was a blessing to Ryan and his team, since it gave them more time to focus on research, and improved the quality of the data they operated on.
        </p>
      </>
    ),
  },
  {
    id: 4,
    bigTitle: "Tracking and extracting small cap financials",
    slug: 'tracking-small-cap-financials',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3',
    title: "Fast and reliable data extraction for small-cap companies",
    desc: "Small companies are often not tracked/covered by Bloomberg. See how sieve made their data available and programmatically usable for one investor",
    content: (
      <>
        <h1 className="text-3xl py-3 font-bold  mt-3">
          Context
        </h1>
        <p className="pb-5 leading-relaxed">
          Ron is an investor in small-cap companies, both in the US and overseas. He often wants to review their financial filings when they are available.
        </p>
        <h1 className="text-3xl font-bold py-3">Issues</h1>
        <p className="pb-5 leading-relaxed">
          Bloomberg doesn't track the small US and international companies that Ron covers, so he resorts to signing up for every company's investor relations email list.
          The company will blast out emails for a variety of things, some of which are things relevant to Ron, like new regulartory filings or earnings calls.
          Right now, Ron needs to fight through the flood of irrelevant emails in his inbox to stay on top of when his companies have relevnt events.
          The process is extremely slow, manual, and fragmented. The chance of missing or being late to a new filing is extremely high.

          Once a filing is available, it is not usually made available through Bloomberg. This means that Ron needs to review the filing manually and transcribe relevant data to excel.
          This process is time-consuming and error-prone. Because of the manual nature, Ron must triage the few data points that he can pull into excel, and can't make use of the full depth of information contained in the reports.
        </p>
        <h1 className="text-3xl py-3 font-bold ">sieve solution</h1>
        <p className="pb-5 leading-relaxed">
          We built a set of tools for Ron to specify the companies and types of events (e.g., new regulatory filings, investor meetings) that he wants to track.
          The tool watches relevant sources for new information, and uses the sieve API to extract the desired data points from any newly available publications.
          With this tool, retrieving 100 data points is as easy as retrieving 1, so Ron is able to unlock the full richness and depth of the filings in a way never before possible.
        </p>
      </>
    ),
  },
];
