const ScrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

// header container
ScrollReveal().reveal(".header_container h1",ScrollRevealOption);

ScrollReveal().reveal(".header_container h4",{
    ...ScrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_container .btn",{
    ...ScrollRevealOption,
    delay:500,
});

// about container
ScrollReveal().reveal(".about_container .section_header", ScrollRevealOption);
ScrollReveal().reveal(".about_container .section_subheader",{
    ... ScrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".about_container .about_flex",{
    ... ScrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".about_container .btn", {
    ... ScrollRevealOption,
    delay:1500,
});

//discover container
ScrollReveal().reveal(".discover_card",{
    ...ScrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".discover_card_content",{
    ...ScrollRevealOption,
    interval:500,
    delay: 200, 
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });

//journals container
ScrollReveal().reveal(".journals_card",{
    ...ScrollRevealOption,
    interval:400,
});
