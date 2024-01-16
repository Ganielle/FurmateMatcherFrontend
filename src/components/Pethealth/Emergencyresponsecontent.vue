<template>
  <div style="position: relative;">
    <img :src="about" alt="" style="width: 100%; height: 50%; margin: -55px auto 0; display: block;" />
    
    <div style="position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: purple;">
        <p style="font-size: 70px;"><strong>FurCare</strong> <em>Guide</em></p>
        <p style="font-size: 18px; position: absolute; top: 70%;">Be a responsible pet owner and learn more about them.</p>
    </div>
</div>
  
  <br/> <br/>
  
  <div>
    <section class="our-courses" id="courses">
      <div class="container">
        <div class="row">
 
          <div class="col-lg-12">
            <div class="naccs">
              <div class="tabs">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="menu">
                      <div
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="changeTab(index)"
                        :class="{ 'active gradient-border': activeTab === index }"
                      >
                        <span>{{ tab.title }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <ul class="nacc">
                      <li v-for="(content, index) in tabContents" :key="index" :class="{ active: activeTab === index }">
                        <div>
                          
                          <div class="right-content">
                            <h2>{{ content.title }}</h2>
                            <h4 style="font-size: 20px; text-align: justify;">{{ content.description }}</h4>
                            <div class="text-button">
                              <router-link :to="content.link">Know More</router-link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br/><br/><br/><br/><br/>
   
  </div>
</template>

<script>

import about from "@/assets/Home/Header/b.svg";

export default {
  data() {
    return {
        about,


      activeTab: 0,
      tabs: [
        { title: "Cat Adoption Checklist" },
        { title: "Cat Well-Being" },
        { title: "Emergency Preparedness for Cats" },
        { title: "Cat's Age Reference" },        

      ],
      tabContents: [
        {
          title: "Cat Adoption Checklist",
          description: "Congratulations on adopting a cat! You are embarking on a wonderful and rewarding relationship. Because adopting a new cat comes with a lot of change for both cat and cat parent, we've compiled a checklist to help make the transition as smooth as possible. ",
          link: "/Firsttimeadopters2",
        },
        // Repeat for other tabs
        {
          title: "Cat's Well-Being",
          description: "Being a responsible cat owner means looking after their health and welfare at all times. The best thing you can do is to make sure they have a calm, relaxed life, but there are a few other things to remember as well. Here are our tips for keeping your cat healthy and happy.",
          link: "/Wellbeing2",
        },
        {
          title: "Emergency Preparedness for Cats",
          description: "Welcome to the Emergency Preparedness for Cats guide, an essential resource for feline owners who prioritize their cats' safety and well-being. Just like any family member, cats deserve careful consideration and planning, especially in times of unforeseen emergencies or disasters.",
          link: "/Tips2",
        },
        {
          title: "Cat's Age Reference",
          description: "Welcome to the world of feline companionship! As responsible cat owners, understanding your cat's age and life stage is crucial for providing appropriate care and ensuring their well-being. ",
          link: "/Age2",
        },
        
      ],
        

    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
/*
---------------------------------------------
our courses
---------------------------------------------
*/

section.our-courses {
  position: relative;
}

section.our-courses .section-heading p {
  padding: 0px 10px;
  
}

section.our-courses:before {
  position: absolute;
  content: '';
  background-image: url(../images/our-courses-left-dec.png);
  left: 45px;
  top: -140px;
  width: 291px;
  height: 231px;
  z-index: 1;
}

section.our-courses:after {
  position: absolute;
  content: '';
  background-image: url(../images/our-courses-right-dec.png);
  right: 45px;
  top: -140px;
  width: 291px;
  height: 231px;
  z-index: 1;
}

section.our-courses .naccs {
  position: relative;
}

section.our-courses .naccs .menu div {
  padding: 15px 30px;
  text-align: center;
  border-radius: 5px !important;
  margin-bottom: 40px;
  font-size: 20px;
  color: #111;
  background-color: #fff;
  cursor: pointer;
  vertical-align: middle;
  font-weight: 900;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  border: 3px solid rgba(219,138,222,0.5);
}

section.our-courses .naccs .menu div.active {
  color: #dc8cdb;
  border: 3px solid rgba(219,138,222,1);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}

section.our-courses ul.nacc {
  margin-left: 100px !important;
  position: relative;
  min-height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);

}

section.our-courses ul.nacc li {
  background-color: #fff;
  overflow: hidden;
  opacity: 0;
  transform: translateX(50px);
  position: absolute;
  list-style: none;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  padding-right: 50px;
}

section.our-courses ul.nacc li .left-image {
  position: absolute;
  margin-right: 50px;
  top: 50%;
  transform: translateY(-50%);
	margin-top: 100px;
}

section.our-courses ul.nacc li .left-image img {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

section.our-courses ul.nacc li .left-image .price h4 {
  position: absolute;
  background: rgb(219, 138, 222);
  background: linear-gradient(-145deg, rgba(219, 138, 222, 1) 0%, rgba(246, 191, 159, 1) 100%);
  color: #fff;
  top: 20px;
  font-size: 20px;
  font-weight: 700;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

section.our-courses ul.nacc li .right-content {
  padding: 80px 0px;
  margin-left: 50px;
  margin-top: 20px;
   text-align: center; /* Center the content */
}

section.our-courses ul.nacc li .right-content h2 {
  font-size: 45px;
  color: purple;
  margin-bottom: 50px;
  font-weight: 800;
  text-align: center;
}

section.our-courses ul.nacc li .right-content ul {
  margin-top: 20px;
  margin-bottom: 20px;
}

section.our-courses ul.nacc li .right-content span {
  font-size: 14px;
  font-weight: 600;
  margin-right: 30px;
  padding-right: 80px;
  border-right: 2px solid #111;
}

section.our-courses ul.nacc li .right-content .last-span {
  margin-right: 0px;
  padding-right: 0px;
  border-right: none;
}

section.our-courses ul.nacc li .right-content p {
  margin-bottom: 50px;
}

section.our-courses ul.nacc li .right-content .text-button {
  margin-top: 50px;
  display: inline-block;
  width: 150px;
  padding: 10px 15px;
  background-color: purple;
  border-radius: 40px;
  text-align: center;
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Add box-shadow transition */
  align-self: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6); /* Add box shadow */
}

section.our-courses ul.nacc li .right-content .text-button:hover {
  background-color: #a07dfb; 
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* Add box shadow on hover */
}


section.our-courses ul.nacc li .right-content .text-button a {
  color: white;
  text-decoration: none;
}

section.our-courses ul.nacc li.active {
  position: relative;
  transition-delay: 0.3s;
  z-index: 2;
  opacity: 1;
  transform: translateX(0px);
}

section.our-courses ul.nacc li p {
  margin: 0;
}




</style>
