export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  accentColor: string;
  image: string;
  featured: boolean;
  content: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fedi-little-big-details",
    title: "Fedi: Little big details",
    description: "Cleaning up some UX papercuts.",
    date: "Jan 1, 2024",
    category: "Case study",
    accentColor: "#4ECCCF",
    image: "/images/case-fedi.webp",
    featured: false,
    content: `
<h2>Context</h2>

<img src="/images/fedi-1.webp" alt="Fedi project backlog overview" />

<img src="/images/fedi-2.webp" alt="Fedi branding" />

<p>Fedi is an all in one social bitcoin app. It has messaging, apps, a bitcoin wallet, and a focus on community custody.</p>

<p>As with most startups, the lead designer was time-constrained and needed some help shipping features and quality of life upgrades. We agreed upon a backlog of projects that were loosely scoped, and were optimizing for speed.</p>

<p>Over a period of 2 months, the goal was to have design specs for a good number of feature upgrades and papercut-fixes in the backlog for whichever engineer had extra bandwidth. For this reason, it was important to have clear design specs and a clear line of thinking.</p>

<p>Here\u2019s one example of a project:</p>

<h2>Dynamic Strings</h2>

<img src="/images/fedi-3.webp" alt="Dynamic strings overview" />

<h4>Challenge</h4>

<p>In an all-in-one community app like Fedi, members are often sending strings of data to each other that prompt an action to be taken. Examples of these strings can be payment requests, Federation invite codes, group message invites, and more. When these codes are shared in a message, they can quickly become unwieldy and difficult to take action on. Copying a large string that\u2019s placed in between other text is a pain. Messages with a large payment request take up valuable screen real estate, and just look ugly.</p>

<img src="/images/fedi-4.png" alt="Unwieldy strings in messages" />

<p>The goal here was to build an interface that translated clunky strings into native-feeling, actionable messages.</p>

<h4>Discovery</h4>

<h6>Bits</h6>

<p>My first step was to make a list of all the bits that would make up this Dynamic String experience. This is a useful exercise before putting pen to paper, since it lets me get a birds eye view of all the moving parts of an interface (before jumping in the weeds of placement).</p>

<img src="/images/fedi-5.png" alt="Bits of a dynamic message" />

<h6>Market research &amp; inspiration</h6>

<p>I wanted to see how other applications handled this challenge. Apple\u2019s iMessage has a similar function, as seen below.</p>

<img src="/images/fedi-6.webp" alt="iMessage link preview inspiration" />

<h6>Exploration</h6>

<p>Here, I began trying a bunch of different visual representations of the Dynamic Message, pulling levers like background color, size, action style, and more. (s/o to Skyler for the analogy)</p>

<img src="/images/fedi-7.webp" alt="Exploration variations" />

<img src="/images/fedi-8.webp" alt="Content width analogy" />

<p>To come to a decision, we landed on two principles:</p>

<h5>1. Let the content shine<br />2. Internationalization (Fedi is a global product)</h5>

<p>Principle #1 helped to rule out the options that used more louder or branded backgrounds. It also helped reinforce that Dynamic Messages should be compact, and grow horizontally (width), rather than grow vertically (height).</p>

<img src="/images/fedi-9.png" alt="Narrowing down options" />

<p>Principle #2 quickly helped to decide on a styling for action buttons. They had to be able to handle potentially larger international words.</p>

<img src="/images/fedi-10.png" alt="Internationalized button styling" />

<h4>Design spec</h4>

<p>I found that the status of the string was best represented as an eyebrow on top. This also allowed for a quick action, if any (for example, copying the raw string).</p>

<img src="/images/fedi-11.webp" alt="Design spec hero" />

<img src="/images/fedi-12.webp" alt="Dynamic message variants" />

<img src="/images/fedi-13.webp" alt="Anatomy breakdown" />

<p>In the design spec, I made sure to include variations of different Dynamic Messages, including both send and receive. I also broke down the anatomy of a Dynamic Message to make it easily digestible for the engineer that picks up this project in the future.</p>
`,
  },
  {
    slug: "wallet-history",
    title: "Wallet history",
    description:
      "Giving Unchained vault clients a continuous wallet history, even if they lose a key",
    date: "Apr 14, 2023",
    category: "Case study",
    accentColor: "#6172F3",
    image: "/images/case-wallet.webp",
    featured: true,
    content: `
<img src="/images/wallet-1.webp" alt="Wallet history overview" />

<p><em>Wallet history \u2014 a timeline of keyset changes</em></p>

<h3>Role</h3>
<p>Design lead. Worked with PM to define the problem statement, scope of work, and worked with engineering to define technical constraints. This feature was shipped and is currently live in production.</p>

<h3>First \u2014 what are vaults?</h3>
<p>At Unchained, we would obsess over the client experience when it comes to their bitcoin vault security. Unchained vaults allow clients to safely secure their bitcoin, with no single points of failure \u2014 requiring 2 out of 3 keys to \u201cunlock\u201d their vault, and spend their bitcoin. Unchained always holds 1 key as a backup, in case clients have one of their keys compromised.</p>

<img src="/images/wallet-2.webp" alt="Unchained vaults overview" />
<p><em>Source: Unchained blog</em></p>

<h3>Discovery, research, and the challenges</h3>

<h4>Key replacements can be risky</h4>
<p>With all multisig wallets, if one of your keys gets lost or compromised, you need to go through a key replacement ceremony. When you replace a key, under the hood, you are creating a<strong> whole new wallet with a completely new set of addresses. </strong>This means that bitcoin in old addresses (secured using the old set of keys) <strong>need to be moved</strong> into your new wallet. Crucially, this also means that accidentally depositing funds to an old address (for example, if an address is whitelisted on an exchange) can put the funds at risk, since you might no longer have access to the replaced key.</p>

<h4>Broken recordkeeping</h4>
<p>Additionally, consistent vault statements are necessary for individuals and businesses that need to account for all the transactions that have occurred over the lifetime of a vault, regardless of how many key replacements have been performed. If you lose a debit card, you don\u2019t have to make a whole new bank account. You simply replace the debit card and update the card number with merchants, and your bank statements and transaction history persist. Bitcoin vaults should behave the same way! Recordkeeping with multisig is a challenge when every time a key replacement occurs, your transaction and address history is lost.</p>

<p>These challenges were discovered after continuous<strong> user interviews with our primary personas</strong>: ultra high net worth individuals and businesses. The goal was to do <strong>\u201cjust enough research\u201d</strong> (without a dedicated UX researcher) to derisk as much as possible, to ship as fast as possible.</p>

<h3>Solution exploration</h3>

<img src="/images/wallet-3.webp" alt="Birds-eye view of explorations" />
<p><em>Birds-eye view of different explorations and iterations</em></p>

<h4>First few rounds of iterations</h4>
<p>Going through multiple rounds of iterations, I\u2019m able to rapidly generate feedback from internal (team) and external (client) stakeholders.</p>

<p>For the first couple rounds of exploratory iterations, the consistent feedback I was getting from our bitcoin engineers was that 1) these stacked, multiple banners were getting too complex and 2) they weren\u2019t mapping to the correct mental model of a history of wallets.</p>

<img src="/images/wallet-4.webp" alt="First rounds of iterations" />

<p>Generating many sub-variants of this wallet selection view allowed me to get feedback from the design team on composition and layout, and feedback from engineering on matching the mental model to the wallet code. This eventually led to the timeline view.</p>

<img src="/images/wallet-5.webp" alt="Sub-variants exploration" />
<img src="/images/wallet-6.webp" alt="Evaluation iterations" />

<h4>Evaluation of variations</h4>
<p>Each variation had pros and cons. For example, one of the variants was very simple and easy to implement technically, but didn\u2019t scale to handle multiple wallets well. That variant also didn\u2019t map well to a mental model of \u201chistory\u201d. Getting the design team\u2019s feedback, it also felt too cramped in terms of visual composition.</p>

<h3>Solution</h3>
<p>With the new wallet history feature, vaults now retain the transaction history, just like a bank account, even through key replacements. Clients get a consistent, continuous experience for records of transactions and vault statements, across all the old and new wallets that make up their vault.</p>

<img src="/images/wallet-1.webp" alt="Wallet history solution" />

<p>Clients also get notifications that alert them to any bitcoin sent to an old address, secured by a potentially compromised key. Like any good partner, Unchained helps guide them through recovering those funds to a new wallet that they control, and help cosign the transfer if necessary.</p>

<img src="/images/wallet-7.webp" alt="Warning banner for old wallet" />
<p><em>Warning banner if an old wallet has received money</em></p>

<p>Additionally, I chose to truncate and disable addresses that are discouraged from depositing to:</p>

<img src="/images/wallet-8.webp" alt="Truncated addresses" />
<p><em>Truncated addresses, that discourage depositing.</em></p>

<p>Bitcoin is a multi-generational asset. Over a lifetime, accidents happen, and clients are inevitably going to need to replace keys that secure their vault. With the launch of the Wallet history feature, otherwise nerve-wracking tasks like performing a key replacement, or recovering funds from an old address, become routine instead of a hectic scramble.</p>

<img src="/images/wallet-9.webp" alt="Design spec for dev handoff" />
<p><em>Design spec ready for dev handoff!</em></p>
`,
  },
  {
    slug: "device-constraints",
    title: "Hardware constraints",
    description: "Designing with hardware that\u2019s out of your control",
    date: "Apr 14, 2023",
    category: "Case study",
    accentColor: "#3DA1FF",
    image: "/images/case-hardware.webp",
    featured: false,
    content: `
<h3>Role</h3>
<p>Design lead. Worked with PM to define the problem statement, scope of work, and worked with engineering to define technical constraints. This feature was shipped and is currently live in production.</p>

<h3>What is this feature?</h3>
<p>At Unchained, we would obsess over the client experience when it comes to their bitcoin vault security. Unchained vaults allow clients to safely secure their bitcoin, with no single points of failure \u2014 requiring 2 out of 3 keys to \u201cunlock\u201d their vault, and spend their bitcoin. Unchained always holds 1 key as a backup, in case clients have one of their keys compromised.</p>
<p>When depositing to your vault, a bitcoin address is generated. For the best security, you should always check your address on your \u201ckey\u201d, or your hardware device. This ensures that your browser isn\u2019t lying to you.</p>
<p>In addition, before you can verify the address on your device, you must register or \u201clink\u201d the device with your vault, so that the device is aware of the other keys used to secure your vault.</p>

<h3>The challenges</h3>

<h4>USB, browser compatibility, and New Tab \uD83D\uDE21</h4>
<p>Using hardware keys that are not manufactured or designed by Unchained present some experience challenges. The most popular devices require plugging into your computer via USB, and often have browser compatibility issues.</p>
<p>Also, frustratingly, Trezor devices open a new tab any time you interact with them. Which brings up the question \u2014 how do we guide users to follow instructions on-platform, then follow instructions off-platform, and remember to come back on platform to complete further instructions?</p>

<img src="/images/hardware-2.webp" alt="Trezor new tab issue" />
<p><em>Trezor frustratingly sending users off-platform to export public keys.</em></p>

<h4>Asynchronous QR codes and microSD</h4>
<p>QR codes and microSD are two other communication protocols between keys and your wallet. Unlike plugging in a USB cable, which can transmit data (like your transaction) in both directions, QR codes and microSD cards require this manual handshake that creates some experience challenges.</p>
<p>For example: scanning a QR code with your hardware key receives the transaction for you to sign, but your computer has no idea if you\u2019ve actually signed on the hardware key or not. The user must manually inform the platform that they have signed, and are ready to pass back the signed transaction back to the computer. Same with microSD!</p>

<h3>Exploration and research</h3>
<p>Both challenges (USB, microSD) and both features (confirm on device, register vault) required similar solutions, so I clubbed research and exploratory iterations together.</p>
<p>What I was looking to build was a step by step guide for clients to use their device. Often times devices have specific initialization steps that can be confusing to follow, so I wanted to make sure those were clear.</p>
<p>The first round of iterations, I thought the vault registration should happen right as part of the vault creation flow, immediately after creating it.</p>

<img src="/images/hardware-3.webp" alt="Exploration iterations" />

<p>What I learned after talking to our concierge support team (internal stakeholders) was that there are times when clients may have more than two devices that they need to link, so this fixed step would likely not fit client needs. Additionally, the fact that this step was only required when spending bitcoin, but not for receiving bitcoin, made the concierge team\u2019s feedback even more relevant.</p>
<p>For confirming address on device using USB, I had a few variants that I narrowed down using internal user testing. When I had two, I went to Twitter (to a pulse from the bitcoin community) and incorporated feedback.</p>

<img src="/images/hardware-4.webp" alt="Twitter community feedback" />

<h3>Solution</h3>

<h4>Device registration (Async microSD card communication)</h4>
<p>Based on this feedback from the concierge team, I found that it made more sense to cut down onboarding time, send clients right to their vault, and have them register as needed.</p>

<img src="/images/hardware-5.webp" alt="Register vault on devices banner" />

<p>Once clients would go to register their device, they would be met with the following steps:</p>

<img src="/images/hardware-6.webp" alt="Device registration flow" />

<p>A few things to point out here:</p>
<ul>
<li>The client needs to download the Coldcard registration file, move it to their device, and then import.</li>
<li>Some devices like Coldcard can be intimidating to new users, so showing screens of the device itself was found to be useful in user testing.</li>
<li>The computer has no idea if the file was actually registered on the device or not. Unfortunately, this is a technical constraint of some bitcoin devices that we have to design around.</li>
</ul>

<h4>Confirm address on device (USB)</h4>
<p>As mentioned in the challenges section of this post, using a Trezor device to confirm address opens up a new tab. Highlighting a couple key points of this solution (seen in screenshot below):</p>

<ul>
<li><strong>Trezor connect: </strong>Once the user opens Trezor Connect and comes back, the modal would step to the next screen, allowing them to verify the address</li>
<li><strong>Confirm with another device: </strong>At the end of the flow, the client is able to confirm with another device (eg. Coldcard)</li>
<li><strong>\u201cCome back here\u201d</strong>: This step instructs users to come back to the platform right after they click the \u201cExport\u201d button on the Trezor tab.</li>
</ul>

<img src="/images/hardware-7.png" alt="Confirm address on device solution" />
`,
  },
  {
    slug: "uds-design-system",
    title: "Unchained Design System",
    description:
      "UDS is used to power most features. I worked with engineering to set up Storybook components. Happy to chat more about this!",
    date: "Jul 20, 2021",
    category: "Case study",
    accentColor: "#4ECCCF",
    image: "/images/case-uds.webp",
    featured: false,
    content: `
<p>UDS is used to power most features. I worked with engineering to set up Storybook components. Happy to chat more about this!</p>
`,
  },
];
