function carrousel5Images() {
    var images155 = document.querySelectorAll('.image155');
    let d = 2000;
    let delta = 1000;

    images155.forEach(function(img,indice) {
        img.style.zIndex = images155.length - indice;
    });

    let anim5img = anime.timeline({
        loop: true,
        delay: 0
    });

    anim5img.add({
        targets: images155,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (4*delta)+(3*d);
                         if (ind == 1) return (3*delta)+(2*d);
                         if (ind == 2) return (2*delta)+d;
                         if (ind == 3) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            return (5*delta)+(4*d);
        }
    });
}