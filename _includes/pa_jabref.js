function toggleInfo(articleid,info) {

	var entry = document.getElementById(articleid);
	var abs = document.getElementById('abs_'+articleid);
	var rev = document.getElementById('rev_'+articleid);
	var bib = document.getElementById('bib_'+articleid);
	
	if (abs && info == 'abstract') {
		abs.className.indexOf('noshow') == -1?abs.className = 'abstract noshow':abs.className = 'abstract show';
	} else if (rev && info == 'review') {
		rev.className.indexOf('noshow') == -1?rev.className = 'review noshow':rev.className = 'review show';
	} else if (bib && info == 'bibtex') {
		bib.className.indexOf('noshow') == -1?bib.className = 'bibtex noshow':bib.className = 'bibtex show';
	} else { 
		return;
	}

	// check if one or the other is available
	var revshow; var absshow; var bibshow;
	(abs && abs.className.indexOf('noshow') == -1)? absshow = true: absshow = false;
	(rev && rev.className.indexOf('noshow') == -1)? revshow = true: revshow = false;	
	(bib && bib.className.indexOf('noshow') == -1)? bibshow = true: bibshow = false;
	
	// highlight original entry
	if(entry) {
		if (revshow || absshow || bibshow) {
		entry.className = 'entry highlight show';
		} else {
		entry.className = 'entry show';
		}
	}
	
	// When there's a combination of abstract/review/bibtex showing, need to add class for correct styling
	if(absshow) {
		(revshow||bibshow)?abs.className = 'abstract nextshow':abs.className = 'abstract';
	} 
	if (revshow) {
		bibshow?rev.className = 'review nextshow': rev.className = 'review';
	}	
	
}
