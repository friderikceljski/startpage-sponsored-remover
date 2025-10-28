function removeSponsoredSection(sponsoredDiv) {
    if (!sponsoredDiv) {
        return;
    }

    sponsoredDiv.style.display = "none";
}

removeSponsoredSection(document.getElementById("gcsa-top"));