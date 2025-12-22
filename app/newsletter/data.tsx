import React from 'react';

// This is your "Database". You just add new items to this list!
export const posts = [
  {
    slug: 'issue-1', // This determines the URL (e.g., /newsletter/issue-1)
    title: "The Single-Cell Blindspot: Why RNA Alone Isn't Enough",
    date: "December 21, 2025",
    summary: "Are you still relying solely on #scRNA-seq? Here is why you are missing the cellular 'decision phase'.",
    tags: ['Bioinformatics', 'Multiomics', 'scATACseq'],
    
    // This is the actual article content
    content: (
      <>
        <p>
          It’s the default approach for a reason. It’s powerful. It’s not "wrong." 
          <strong> But it is incomplete.</strong>
        </p>
        <p>
          If you only look at gene expression, you are watching the biological movie after the major plot points have already been set.
        </p>

        {/* Example of a Highlight Box */}
        <div className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-2">🔬 The scRNA-seq "Snapshot"</h3>
          <p>It identifies functional shifts, stress responses, and lineage differences.</p>
        </div>

        <p>
           The Limitation: Expression is typically a downstream readout—the end of a regulatory cascade, not the beginning.
        </p>
      </>
    )
  },
  
  // TO ADD A NEW POST: Copy from the '{' above to '},' and paste it here!
];
