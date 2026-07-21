const SETTLEMENT_TEMPLATE = `
<div id="contract-pdf" class="doc-settlement">

  <!-- LETTERHEAD: doctor/client info (PureMD branding removed) -->
  <div class="doc-subhead">
    <div class="subhead-row">
      <span class="subhead-name" id="vDrName">____________</span>
      <span class="subhead-meta"><span id="vLicenseBlock">Lic # <span id="vDcLicense">____________</span> &nbsp;|&nbsp; </span>Tax ID <span id="vTaxId">____________</span></span>
    </div>
    <div class="subhead-addr">
      <span id="vDrAddr">____________</span>
      &nbsp;|&nbsp; Phone <span id="vDrPhone">____________</span> / Fax <span id="vDrFax">____________</span>
    </div>
  </div>

  <div class="doc-title">Settlement Agreement</div>

  <p class="doc-p" style="margin-bottom:10px;"><span id="vDate">____________</span></p>

  <table class="fee-tbl settlement-meta">
    <tbody>
      <tr><td class="svc-name" style="width:25%">Patient Name:</td><td id="vPatientName">____________</td></tr>
      <tr><td class="svc-name">Insurance:</td><td id="vInsurance">____________</td></tr>
      <tr><td class="svc-name">Claim#:</td><td id="vClaimNumber">____________</td></tr>
      <tr><td class="svc-name">Provider:</td><td id="vProviderSig2">____________</td></tr>
    </tbody>
  </table>

  <div class="sec-head" style="text-align:center;">Confirmation Letter</div>

  <p class="doc-p editable-text">Dear Sir/Madam,</p>
  <p class="doc-p editable-text">This will confirm our agreement to accept <strong>$<span id="vAmount">____________</span></strong> as full and final settlement <span id="vDateRangeText">____________</span>.</p>
  <p class="doc-p editable-text"><strong>PLEASE SEND SIGNED CONFIRMATION WITHIN 1 BUSINESS DAY.</strong></p>
  <p class="doc-p editable-text">Once the payment is received in our bank, the remaining balance will be withdrawn.</p>
  <p class="doc-p editable-text"><strong>Payment is expected in our office within 30 calendar days of this agreement. Interest and penalties will apply to begin the 31st day until payment is received. Please note that payments made via wire transfer or electronic transfer are not accepted.</strong></p>
  <p class="doc-p editable-text">Thank you for your time and cooperation in this matter.</p>

  <div class="payee-block">
    <div class="payee-lbl">Please make checks payable to:</div>
    <div class="payee-name" id="vPayeeName">____________</div>
    <div class="payee-addr" id="vPayeeAddr">____________</div>
  </div>

  <div class="sig-section">
    <div class="sig-blk">
      <div class="sig-blk-title">Sincerely,</div>
      <div class="sig-row"><span class="sig-lbl">Name:</span><span class="sig-val" id="vAdjusterName">____________</span></div>
      <div class="sig-row"><span class="sig-lbl">Date:</span><span class="sig-val" id="vDateAdjuster">&nbsp;</span></div>
      <div class="sig-canvas-wrap">
        <div class="sig-canvas-lbl">Signature:</div>
        <div class="provider-sig-block">
          <div class="provider-sig-font" id="vAdjusterSig">____________</div>
        </div>
      </div>
    </div>

    <div class="sig-blk">
      <div class="sig-blk-title">Accepted by,</div>
      <div class="sig-row"><span class="sig-lbl">Name:</span><span class="sig-val" id="vAcceptedByName">____________</span></div>
      <div class="sig-row"><span class="sig-lbl">Date:</span><span class="sig-val" id="vDateClient">&nbsp;</span></div>
      <div class="sig-canvas-wrap">
        <div class="sig-canvas-lbl">Signature:</div>
        <div class="sig-canvas"></div>
      </div>
    </div>
  </div>
</div>
`;