<template>
    <h3>Template</h3>
    <q-editor
        v-model="editorContent"
        :style="{ width: editorWidth, height: editorHeight }"
        min-height="5rem"
        :toolbar="[
            [
                {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify'],
                },
            ],
            [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript',
            ],
            ['print', 'upload', 'save'],
            [
                {
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                },
                {
                    label: $q.lang.editor.fontSize,
                    icon: $q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7',
                    ],
                },
                {
                    label: $q.lang.editor.defaultFont,
                    icon: $q.iconSet.editor.font,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                        'default_font',
                        'arial',
                        'arial_black',
                        'comic_sans',
                        'courier_new',
                        'impact',
                        'lucida_grande',
                        'times_new_roman',
                        'verdana',
                        'bookman_old_style',
                    ],
                },
                'removeFormat',
            ],
            ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
            ['undo', 'redo'],
            ['viewsource'],
        ]"
        :fonts="{
            arial: 'Arial',
            arial_black: 'Arial Black',
            comic_sans: 'Comic Sans MS',
            courier_new: 'Courier New',
            impact: 'Impact',
            lucida_grande: 'Lucida Grande',
            times_new_roman: 'Times New Roman',
            verdana: 'Verdana',
            bookman_old_style: 'Bookman Old Style',
        }"
    />
</template>

<script setup>
import { ref } from "vue";

const editorContent = ref("");
const editorWidth = ref("210mm"); // A4 width
const editorHeight = ref("297mm"); // A4 height

// Setting default content for the editor
editorContent.value = `
<style>
@media print{
p{
margin:0}


}
</style>
  <div>
    
      <center style="font-weight:700">NO. G. 26035/4/2011-F.APF</center>
      <center style="font-weight:700">GOVERNMENT OF MIZORAM</center>
      <center style="font-weight:700">FINANCE DEPARTMENT(APF)</center><br>
      <center>***</center>
   

    
      <p style="text-indent: 20rem;font-weight: 700">Dated Aizawl, the 12th November, 2023</p>
    
    <div style="padding-left: 4rem;padding-right: 4rem;">


      To,
    <div class="line">
        <p style="text-indent: 6rem;margin:0">
          The Under Secretary to the Govt. of Mizoram,
        </p>
        <p style="text-indent: 6rem;padding-bottom: 2rem; ">
          Public Health Engineering Department,
        </p>

    </div>
        <p style="font-weight: 700;margin:0">Subject: <span style="padding-left: 2.1rem;">Sanction & Approval of NRW of GPF
            amounting to ₹ 11,00,000/-</span></p>
        <p style="text-indent: 6rem;font-weight: 700">(Rupees asdas) only.</p>

      Sir,
      <div>
        <p style="text-indent: 6rem; width: 34rem;">
          I am directed to convey sanction and approval of NFW of GPF amounting to<span style="font-weight:700;"> ₹
            11,00,000/- (Rupees Eleven Lakhs)</span> only in respect of the following person for various purposes.
        </p>
      </div>

      <!-- <table>
      <th>
        <td>1</td>
        <td>C. Ramthanhawla, J.E. -</td>
        <td>₹ 5,00,000/-</td>
        <td>(Holder of GPA Account No. PHE(MZ) 0307)</td>
      </th>
      <tr>
      </tr>
      
    </table> -->
      <div style="display: flex;flex-direction: column; padding-bottom: 3rem;">
        <div style="display: flex;">
          <p>1</p>
          <p style="text-indent: 1rem;">C. Ramthanhawla, J.E. </p>
          <p style="text-indent: 1rem;">-</p>
          <p style="text-indent: 1rem;">₹ 5,00,000/-</p>
        </div>
        <p style="text-indent: 13rem;"> (Holder of GPA Account No. PHE(MZ) 0307) </p>
        <div style="display: flex;">
          <p>1</p>
          <p style="text-indent: 1rem;">Lalhumhima, J.E. </p>
          <p style="text-indent: 3rem;">-</p>
          <p style="text-indent: 1rem;">₹ 6,00,000/-</p>
        </div>
        <p style="text-indent: 13rem;"> (Holder of GPA Account No. PHE(MZ) 0892) </p>
      </div>



      <p style="padding-left: 21rem; padding-bottom: 3rem;">Yours Faithfully</p>

      <p style="padding-left: 21rem;">(C. LUNGMUANPUIA)</p>
      <p style="padding-left: 18rem;">Under Secretary to the Govt. of Mizoram</p>
      <p style="padding-left: 20.5rem;">Finance Department(APF)</p>


      <p style="font-weight: 700;">Memo no. G. 26035/42011-F.APF &nbsp;&nbsp;&nbsp;: <span
          style="padding-left: 2rem;">Dated Aizawl, the 12th
          November, 2023</span></p>
      <p style="font-weight: 700">Copt to:</p>
      <div style="display: flex; gap: 2;">
        <p style="text-indent: 5rem;">1)</p>
        <p style="width: 29rem; padding-left: 2rem;">Chief Contoller of Accounts, Accounts &
          Treasuries, MINECO (GPF Section) for inforamtion</p>
      </div>

    </div>


  </div>

  `;
</script>
