<script setup>
import DynamicStack from "./common/DynamicStack.vue";
import SecondaryTemplate from "../templates/SecondaryTemplate.vue";

const itemStack = [
  {
    left: '5 Stars',
    right: 'Worth Every Penny',
  },
  {
    left: '4 Stars',
    right: 'Must-Try',
  },
  {
    left: '3 Stars',
    right: 'Highly Recommend',
  },
  {
    left: '2 Stars',
    right: 'Plain but Good',
  },
  {
    left: '1 Star',
    right: 'Not Bad',
  }
]

</script>

<template>
  <secondary-template>

    <template #section-summary>
      <div class="paragraph-container">
        <svg width="86" height="80" viewBox="0 0 300 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_143_666)">
            <path d="M300 223.357V62.1012C300 27.842 272.203 0 238 0C203.797 0 176 27.842 176 62.1012V266L300 223.461V223.357Z" fill="currentColor"/>
            <path d="M124 233.586V62.069C124 27.8276 96.2033 0 62 0C27.7967 0 0 27.8276 0 62.069V267C0 270 0.31 273 0.723333 276L124 233.69V233.586Z" fill="currentColor"/>
          </g></svg>
        <div>Ever wished you had a friend who'd tried all the best restaurants (or at least a good chunk of them) and could give you the inside scoop? Well, consider the Minnchelin Guide <span>your personal dining companion</span>!</div>
        <div>This website is a fun, non-commercial project created to document my culinary adventures across <span>Minneapolis-St.Paul</span> (my college town and the inspiration for 'Minn'chelin), <span>San Francisco, Chicago, and New York City</span>. All reviews are purely subjective and based on my own dining experiences.</div>
        <div>So, grab a fork and join me on this delicious journey!</div>
      </div>
    </template>

    <template #content>
      <section>
        <div><h1>About the Editor</h1><h3>Min Yu</h3></div>
        <div class="about-me">
          <img src="../assets/images/myphoto.jpg" alt="Editor Photo">
          <p>Food isn’t just fuel for Min — it’s an experience. <br> After a decade in California and college years spent uncovering Minnesota’s hidden gems, she’s the one her friends call for date-night spots, birthday dinners, and laid-back hangouts. A fan of Korean and Italian cuisine, Min has a taste for quality, aesthetics, and ambiance. And if raw fish, vinaigrette, or mushrooms are on the menu? She’s looking elsewhere.</p>
        </div>
      </section>

      <section class="second">
        <div><h1>Rating System</h1><h3>Even 1 Star isn't so bad. It made it to the Minnchelin Guide afterall.</h3></div>
        <div><dynamic-stack :items="itemStack"/></div>
      </section>
    </template>

  </secondary-template>
</template>

<style scoped>
.about-me {
  display: flex;
  flex-direction: column;
}

.paragraph-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

section.second{
  margin-top: 15%;
}

@media screen and (width > 900px) {
  .about-me {
    img {
      width: 40%;
      height: 100%;
      max-width: 500px;
    }

    display: flex;
    flex-direction: row;
  }
}

p{
  text-align: left;
}
</style>