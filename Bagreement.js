const AGREEMENT_TEMPLATE = `
<div id="contract-pdf">

  <!-- HEADER -->
  <div class="doc-header">
    <img src="logo.png" alt="PureMD Logo">
    <div class="hdr-text">
      <div class="hdr-company">PUREMD GROUP LLC</div>
      <div class="hdr-sub">Medical Billing &amp; Collections Services</div>
    </div>
    <div class="hdr-addr">100 N Brand Blvd S-522<br>Glendale, CA 91203</div>
  </div>

  <div class="doc-title">Business Agreement</div>

  <!-- INTRO -->
  <p class="doc-p editable-text">
    This Agreement is made on <strong><span id="vDate" contenteditable="false">____________</span></strong> between <strong>PureMD Group LLC</strong>
    (principal office: 100 N Brand Blvd S-522, Glendale, CA 91203) and
    <strong>"<span id="vPractice" contenteditable="false">____________</span>"</strong>
    (principal office: <span id="vAddr" contenteditable="false">____________</span>), the <strong>"Client."</strong>
  </p>
  <p class="doc-p editable-text"><strong>WHEREAS</strong> PureMD Group LLC provides medical billing, collections, coding, credentialing, and administrative services to healthcare providers; and</p>
  <p class="doc-p editable-text"><strong>WHEREAS</strong> Client wishes to retain PureMD Group LLC to provide accounts payable/receivable services pursuant to the terms herein.</p>
  <p class="doc-p editable-text"><strong>NOW, THEREFORE</strong> the parties agree as follows:</p>

  <!-- SERVICES -->
  <div class="sec-head">Services</div>
  <p class="doc-p editable-text"><strong>Collections:</strong> Client expressly authorizes PureMD Group to prepare, collect, and negotiate Liens/outstanding balances on behalf of Provider. PureMD Group will apply best efforts to obtain maximum reimbursement for all clinical procedures and medical services. Workers' Compensation claims will be collected in the Client's name using assigned provider numbers. Payments shall be directed to Client-controlled accounts. PureMD Group will post payments from law firms/insurers to patient files, engage aggressively with insurances, TPAs, and attorneys, and provide all necessary documentation to maximize collections.</p>

  <!-- CLIENT RESPONSIBILITIES -->
  <div class="sec-head">Client Responsibilities</div>
  <p class="doc-p editable-text"><strong>Reasonable Assistance:</strong> Client shall provide all necessary records, information, and assistance for PureMD Group to perform Services. Client is responsible for accuracy and completeness of medical reports and ensuring medical necessity of billed services. Client shall promptly provide copies of any direct payments received from insurers or law firms.</p>
  <p class="doc-p editable-text"><strong>Client Acknowledgement:</strong> Client bears ultimate responsibility for all submitted documentation and shall maintain original source documents for verification. PureMD Group LLC bears no liability for accuracy of coding or medical necessity determinations.</p>

  <!-- FEES -->
  <div class="sec-head">Fees</div>
  <p class="doc-p editable-text"><strong>Setup Cost:</strong> No charge for initial setup of Collection services.</p>
  <p class="doc-p editable-text"><strong>Net Collections:</strong> Client shall pay based on total monthly net collections at the following rates:</p>

  <table class="fee-tbl">
    <thead>
      <tr>
        <th style="width:25%;border:1px solid #0F2561">SERVICES</th>
        <th style="width:55%;border:1px solid #0F2561">DESCRIPTION</th>
        <th style="width:20%;border:1px solid #0F2561">FEE</th>
      </tr>
    </thead>
    <tbody id="feeTableBody">
    </tbody>
  </table>

  <p class="doc-p editable-text"><strong>Terms of Payment:</strong> PureMD Group LLC invoices at the start of each month for the prior month's services. Payment is due within 15 days of invoice receipt via ACH auto-pay or wire transfer. If outstanding dues remain unpaid beyond three months, penalties and interest will be applied.</p>

  <!-- CONFIDENTIALITY -->
  <div class="sec-head">Confidentiality &amp; HIPAA</div>
  <p class="doc-p editable-text"><strong>Business Associate Agreement:</strong> Both parties shall abide by the covenants and provisions of the Business Associates Agreement, incorporated herein by reference.</p>

  <!-- TERM & TERMINATION -->
  <div class="sec-head">Term &amp; Termination</div>
  <p class="doc-p editable-text"><strong>Term:</strong> This Agreement is effective for three (3) months from the Effective Date and auto-renews for successive three-month periods unless terminated.</p>
  <p class="doc-p editable-text"><strong>Termination:</strong> Either party may terminate for breach or convenience with thirty (30) days written notice. Upon termination, Client may revoke PureMD Group LLC's system access and shall pay all accrued fees plus any pending or in-transit charges.</p>

  <!-- LIABILITY -->
  <div class="sec-head">Limitations of Liability</div>
  <p class="doc-p editable-text"><strong>Limited Warranty:</strong> All Services are provided "as is" without any express or implied warranties, including merchantability or fitness for a particular purpose.</p>
  <p class="doc-p editable-text"><strong>Indemnification:</strong> Client shall indemnify and hold PureMD Group LLC, its owners, directors, employees, and contractors harmless from all liability, claims, damages, fines, and costs arising from performance or non-performance of this Agreement, or from false, fraudulent, incomplete, or misleading information provided by Client.</p>
  <p class="doc-p editable-text">In no event shall PureMD Group LLC's liability exceed fees paid by Client in the three (3) months preceding the claim. Neither party is liable for third-party claims or failures resulting from force majeure events.</p>

  <!-- GENERAL -->
  <div class="sec-head">General</div>
  <p class="doc-p editable-text"><strong>Governing Law:</strong> This Agreement is governed by the laws of California.</p>
  <p class="doc-p editable-text"><strong>Entire Agreement:</strong> This Agreement supersedes all prior agreements or understandings between the parties on this subject matter.</p>
  <p class="doc-p editable-text"><strong>Notices:</strong> All notices shall be in writing, delivered via email or postal mail to the addresses above.</p>
  <p class="doc-p editable-text"><strong>Counterparts:</strong> This Agreement may be executed in counterparts, each of which shall constitute an original. Facsimile signatures are binding.</p>

  <p class="witness">IN WITNESS WHEREOF, the parties have caused this Agreement to be executed by their duly authorized representatives as of the Effective Date.</p>

  <!-- SIGNATURE BLOCKS -->
  <div class="sig-section">

    <div class="sig-blk">
      <div class="sig-blk-title">Client</div>
      <div class="sig-blk-sub"><span id="vDoctor">____________</span>, Owner of "<span id="vPracticeSig">____________</span>"</div>
      <div class="sig-row"><span class="sig-lbl">Name:</span><span class="sig-val" id="vSigName">____________</span></div>
      <div class="sig-row"><span class="sig-lbl">Practice:</span><span class="sig-val" id="vSigPractice">____________</span></div>
      <div class="sig-row"><span class="sig-lbl">Address:</span><span class="sig-val" id="vSigAddr">____________</span></div>
      <div class="sig-row"><span class="sig-lbl">Date:</span><span class="sig-val" id="vDateClient">&nbsp;</span></div>
      <div class="sig-canvas-wrap">
        <div class="sig-canvas-lbl">Signature:</div>
        <div class="sig-canvas"></div>
      </div>
    </div>

    <div class="sig-blk">
      <div class="sig-blk-title">Service Provider</div>
      <div class="sig-blk-sub">PureMD Group LLC — Glendale, CA 91203</div>
      <div class="sig-row"><span class="sig-lbl">Name:</span><span class="sig-val" id="vProviderName">____________</span></div>
      <div class="sig-row"><span class="sig-lbl">Title:</span><span class="sig-val" id="vProviderTitle">____________</span></div>
      <div class="sig-row"><span class="sig-lbl">Address:</span><span class="sig-val">100 N Brand Blvd S-522, Glendale, CA 91203</span></div>
      <div class="sig-row"><span class="sig-lbl">Date:</span><span class="sig-val" id="vDateSig">____________</span></div>
      <div class="sig-canvas-wrap">
        <div class="sig-canvas-lbl">Signature:</div>
        <div class="provider-sig-block">
          <div class="provider-sig-font" id="vProviderSig">____________</div>
        </div>
      </div>
    </div>

  </div>
</div>
`;