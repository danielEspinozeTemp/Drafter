const VOB_TEMPLATE = `
<div id="contract-pdf" class="doc-vob">

  <!-- HEADER -->
  <div class="doc-header">
    <img src="logo.png" alt="PureMD Logo">
    <div class="hdr-text">
      <div class="hdr-company">PUREMD GROUP LLC</div>
    </div>
    <div class="hdr-addr">100 N Brand Blvd S-522<br>Glendale, CA 91203</div>
  </div>

  <div class="doc-title">Verification of Benefits Agreement</div>

  <!-- INTRO -->
  <p class="doc-p editable-text">
    This Agreement is made on <strong><span id="vDate" contenteditable="false">06/16/2026</span></strong> between <strong>PureMD Group LLC</strong> (<strong>"Service Provider"</strong>) and
    <strong>"<span id="vPractice" contenteditable="false">Collazo Chiropractic</span>"</strong>
    (<span id="vAddr" contenteditable="false">400 N Ford Blvd, Los Angeles, CA 90022</span>) (<strong>"Client"</strong>).
  </p>
  <p class="doc-p editable-text"><strong>WHEREAS</strong> Client wishes to engage Service Provider to perform verification of benefits (VOB) on behalf of its patients; now therefore the parties agree:</p>

  <!-- SCOPE OF SERVICES -->
  <div class="sec-head">1. Scope of Services</div>
  <p class="doc-p editable-text">Client shall provide patient information necessary for verifying insurance benefits. Service Provider shall perform the VOB and return coverage details including eligibility, benefit limits, deductibles, co-pays, and exclusions.</p>

  <!-- FEES -->
  <div class="sec-head">2. Fees &amp; Payment</div>
  <p class="doc-p editable-text"><strong>Service Fee:</strong> Client shall pay Service Provider <span id="vPricingModel">a Flat Monthly Fee</span> of <strong>$<span id="vPricingRate">500.00</span></strong> <span id="vPricingDetail">for VOB services rendered each month.</span></p>
  <p class="doc-p editable-text"><strong>Payment:</strong> Invoices issued monthly, due within 15 days. Late payments accrue 1.5% per month.</p>

  <!-- DATA PRIVACY -->
  <div class="sec-head">3. Data Privacy &amp; Security</div>
  <p class="doc-p editable-text">Both parties shall comply with HIPAA and applicable privacy laws. Service Provider shall maintain safeguards to protect patient PHI and shall not use or disclose PHI except as necessary to perform Services or as required by law.</p>

  <!-- ACCURACY -->
  <div class="sec-head">4. Accuracy of Information</div>
  <p class="doc-p editable-text">Service Provider will use commercially reasonable efforts based on carrier data at time of request but is not liable for errors caused by inaccurate carrier records, subsequent eligibility changes, or incorrect Client information. Verifications are a snapshot in time.</p>

  <!-- TERM -->
  <div class="sec-head">5. Term &amp; Termination</div>
  <p class="doc-p editable-text">This Agreement remains in effect until terminated by either party upon 30 days written notice. Outstanding fees for services rendered prior to termination remain due.</p>

  <!-- GENERAL -->
  <div class="sec-head">6. General Provisions</div>
  <p class="doc-p editable-text">This Agreement is governed by California law. It constitutes the entire agreement between the parties and may be executed in counterparts. Notices shall be sent to the addresses above.</p>

  <p class="witness">IN WITNESS WHEREOF, the parties have executed this Agreement as of the date above.</p>

  <!-- SIGNATURE BLOCKS -->
  <div class="sig-section">

    <div class="sig-blk">
      <div class="sig-blk-title">Client</div>
      <div class="sig-blk-sub"><span id="vDoctor">Dr. Jean Collazo</span>, Owner of "<span id="vPracticeSig">Collazo Chiropractic</span>"</div>
      <div class="sig-row"><span class="sig-lbl">Name:</span><span class="sig-val" id="vSigName">Dr. Jean Collazo</span></div>
      <div class="sig-row"><span class="sig-lbl">Practice:</span><span class="sig-val" id="vSigPractice">Collazo Chiropractic</span></div>
      <div class="sig-row"><span class="sig-lbl">Address:</span><span class="sig-val" id="vSigAddr">400 N Ford Blvd, Los Angeles, CA 90022</span></div>
      <div class="sig-row"><span class="sig-lbl">Date:</span><span class="sig-val" id="vDateClient">&nbsp;</span></div>
      <div class="sig-canvas-wrap">
        <div class="sig-canvas-lbl">Signature:</div>
        <div class="sig-canvas"></div>
      </div>
    </div>

    <div class="sig-blk">
      <div class="sig-blk-title">Service Provider</div>
      <div class="sig-blk-sub">PureMD Group LLC — Glendale, CA 91203</div>
      <div class="sig-row"><span class="sig-lbl">Name:</span><span class="sig-val" id="vProviderName">Elijah Perez</span></div>
      <div class="sig-row"><span class="sig-lbl">Title:</span><span class="sig-val" id="vProviderTitle">Vice President, PureMD Group LLC</span></div>
      <div class="sig-row"><span class="sig-lbl">Address:</span><span class="sig-val">100 N Brand Blvd S-522, Glendale, CA 91203</span></div>
      <div class="sig-row"><span class="sig-lbl">Date:</span><span class="sig-val" id="vDateSig">06/16/2026</span></div>
      <div class="sig-canvas-wrap">
        <div class="sig-canvas-lbl">Signature:</div>
        <div class="provider-sig-block">
          <div class="provider-sig-font" id="vProviderSig">Elijah Perez</div>
        </div>
      </div>
    </div>

  </div>
</div>
`;
