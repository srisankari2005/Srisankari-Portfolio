(() => { const root=document.documentElement; root.dataset.theme=localStorage.getItem("portfolio-theme")||"dark"; document.querySelectorAll(".theme-toggle").forEach(btn=>{const icon=()=>btn.textContent=root.dataset.theme==="dark"?"☀":"☾";icon();btn.addEventListener("click",()=>{root.dataset.theme=root.dataset.theme==="dark"?"light":"dark";localStorage.setItem("portfolio-theme",root.dataset.theme);icon()})}); const loader=document.getElementById("loader");
if(loader){
  const seen=sessionStorage.getItem("portfolio-loader-seen");
  if(seen){ loader.classList.add("hide"); }
  else{
    document.body.classList.add("loading");
    setTimeout(()=>{
      loader.classList.add("hide");
      document.body.classList.remove("loading");
      sessionStorage.setItem("portfolio-loader-seen","1");
    },5000);
  }
} const typing=document.getElementById("typingText"); if(typing){const words=["Frontend Developer","Web Designer","UI Designer","Content Creator"];let wi=0,ci=0,del=false;function type(){const w=words[wi];typing.textContent=del?w.slice(0,ci--):w.slice(0,ci++);let sp=del?55:85;if(!del&&ci>w.length){del=true;sp=1000}else if(del&&ci<0){del=false;wi=(wi+1)%words.length;ci=0;sp=300}setTimeout(type,sp)}type()} document.querySelectorAll(".sparkle").forEach(el=>el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect();el.style.setProperty("--mx",`${e.clientX-r.left}px`);el.style.setProperty("--my",`${e.clientY-r.top}px`)})); const form=document.getElementById("contactForm");if(form){form.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("name").value.trim(),em=document.getElementById("email").value.trim(),m=document.getElementById("message").value.trim();const subject=encodeURIComponent("Portfolio enquiry from "+n),body=encodeURIComponent(`Hello Srisankari,\n\nName: ${n}\nEmail: ${em}\n\nMessage:\n${m}`),btn=form.querySelector("button");btn.textContent="Message Sent ✓";btn.disabled=true;btn.classList.add("sent");setTimeout(()=>location.href=`mailto:srisankari884@gmail.com?subject=${subject}&body=${body}`,450);setTimeout(()=>location.reload(),3000)})}})();