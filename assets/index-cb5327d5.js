(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();new Swiper(".Swiper",{slidesPerView:4,spaceBetween:18,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1200:{slidesPerView:4},768:{slidesPerView:2.5},320:{slidesPerView:1}}});(()=>{const r={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};r.openModalBtn.addEventListener("click",o),r.closeModalBtn.addEventListener("click",o);function o(){r.modal.classList.toggle("is-hidden")}})();
