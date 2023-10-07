<template>
  <svg id="questionMark" width="660" height="660" viewBox="0 0 820 820" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle id="bigEllipse" cx="410" cy="410" r="407.5" fill="#EEFFFF" stroke="#00D5D9" stroke-width="5"/>
      <circle id="smallEllipse" cx="410" cy="410" r="357.5" fill="white" stroke="#00D5D9" stroke-width="5"/>
      <circle id="textGenerate" cx="410" cy="410" r="369.5" stroke="black"/>
      <path id="?" d="M388.824 457.636V456.358C388.966 442.793 390.386 431.997 393.085 423.972C395.784 415.946 399.619 409.447 404.591 404.476C409.562 399.504 415.528 394.923 422.489 390.733C426.679 388.176 430.443 385.158 433.781 381.678C437.119 378.126 439.747 374.043 441.665 369.426C443.653 364.81 444.648 359.696 444.648 354.085C444.648 347.125 443.014 341.088 439.747 335.974C436.48 330.861 432.112 326.919 426.643 324.149C421.175 321.379 415.102 319.994 408.426 319.994C402.602 319.994 396.991 321.202 391.594 323.616C386.196 326.031 381.686 329.831 378.064 335.016C374.442 340.2 372.347 346.983 371.778 355.364H344.932C345.5 343.29 348.625 332.956 354.307 324.362C360.06 315.768 367.624 309.199 376.999 304.653C386.445 300.108 396.92 297.835 408.426 297.835C420.926 297.835 431.793 300.321 441.026 305.293C450.33 310.264 457.503 317.082 462.545 325.747C467.659 334.412 470.216 344.284 470.216 355.364C470.216 363.176 469.009 370.243 466.594 376.564C464.25 382.885 460.841 388.531 456.366 393.503C451.963 398.474 446.636 402.878 440.386 406.713C434.136 410.619 429.129 414.739 425.365 419.071C421.601 423.332 418.866 428.411 417.162 434.305C415.457 440.2 414.534 447.551 414.392 456.358V457.636H388.824ZM402.46 520.705C397.205 520.705 392.695 518.822 388.93 515.058C385.166 511.294 383.284 506.784 383.284 501.528C383.284 496.273 385.166 491.763 388.93 487.999C392.695 484.234 397.205 482.352 402.46 482.352C407.716 482.352 412.226 484.234 415.99 487.999C419.754 491.763 421.636 496.273 421.636 501.528C421.636 505.009 420.749 508.205 418.973 511.116C417.268 514.028 414.96 516.372 412.048 518.148C409.207 519.852 406.011 520.705 402.46 520.705Z" fill="black"/>
    </g>
  </svg>
</template>

<script setup lang="ts">
</script>

<style scoped>
text{
  transform-origin: 50% 50%;
  -webkit-animation-name: rotate;
     -moz-animation-name: rotate;
      -ms-animation-name: rotate;
       -o-animation-name: rotate;
          animation-name: rotate;
  -webkit-animation-duration: 25s;
     -moz-animation-duration: 25s;
      -ms-animation-duration: 25s;
       -o-animation-duration: 25s;
          animation-duration: 25s;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
       -o-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
       -o-animation-timing-function: linear;
          animation-timing-function: linear;
}

@-webkit-keyframes rotate {
    from { -webkit-transform: rotate(0); }
    to { -webkit-transform: rotate(360deg); }
}
@-moz-keyframes rotate {
    from { -moz-transform: rotate(0); }
    to { -moz-transform: rotate(360deg); }
}
@-ms-keyframes rotate {
    from { -ms-transform: rotate(0); }
    to { -ms-transform: rotate(360deg); }
}
@-o-keyframes rotate {
    from { -o-transform: rotate(0); }
    to { -o-transform: rotate(360deg); }
}
@keyframes rotate {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
}


</style>