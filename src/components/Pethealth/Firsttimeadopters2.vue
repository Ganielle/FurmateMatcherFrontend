<template>
  <MDBContainer>
  
  <section>
    <br/>  <br/>  <br/>  
    <div style="text-align: center;">
      <strong style="font-size: 3vw; color: purple;">Cat Adoption Checklist</strong>
    </div>
    <br /><br /> <br/>  
    <h3 style="text-align: justify;" >
      Congratulations on adopting a cat! You are embarking on a wonderful and rewarding relationship. Because adopting a new cat comes with a lot of change for both cat and cat parent, we've compiled a checklist to help make the transition as smooth as possible.
    </h3>
    <br /><br />

    <!-- Questions for All Adopters section -->
<h2>Questions for All Adopters:</h2><br />
<ul style="font-size: 25px;">
  <li>Do you have any other cats and how will they react to a new cat?</li>
  <li>Is your current residence suited to the cat you're considering?</li>
  <li>How will your social life or work obligations affect your ability to care for a cat?</li>
  <li>Do you have a plan for your new cat during vacations and/or work travel?</li>
  <li>How do the people you live with feel about having a cat in the house?</li>
  <li>Are you (or your spouse, partner, or roommate) intolerant of hair, dirt, and other realities of sharing your home with a cat, such as allergies?</li>
  <li>Do you or any of your household/family members have health issues that may be affected by a cat?</li>
  <li>What breed of cat is the best fit with your current lifestyle? </li>
  <li>Is there tension in the home? Cats quickly pick up on stress in the home, and it can exacerbate their health and behavior problems.</li>
  <li>Is there an adult in the family who has agreed to be ultimately responsible for the cat's care?</li>
</ul>
<br /><br />

<!-- Other Considerations section -->
<h2>Other Considerations:</h2><br />
<ul style="font-size: 25px;">
  <li>If you are thinking of adopting a young cat, do you have the time and patience to work with the cat through its adolescence, taking house-breaking, chewing and energy-level into account?</li>
  <li>Have you considered your lifestyle carefully and determined whether a younger or older cat would be a better match for you?</li>
  <li>Can you train and handle a cat with behavior issues or are you looking for an easy-going friend?</li>
  <li>Do you need a cat who will be reliable with children or one you can take with you when you travel?</li>
  <li>Do you want a cat who follows you all around the house or would you prefer a less clingy, more independent character?</li>
</ul>
<br /><br />

<!-- Cat Costs section -->
<h2>Cat Costs:</h2><br />
<ul style="font-size: 25px;">
  <li>More likely than not, the adopting agency will charge a fee to help defray the cost of taking in homeless or lost animals. The adoption fee you pay will be a tiny fraction of the money you will spend over the life of your cat.</li>
  <li>You may need to pay for your adopted cat to be spayed or neutered before bringing him or her home.</li>
  <li>Some expenses are mandatory for all cats, including:</li>
  <ul>
    <li>Food</li>
    <li>Routine veterinary care</li>
    <li>Licensing according to local regulations</li>
    <li>Collars, leashes, and identification tags</li>
    <li>Kitty litter and box</li>
    <li>Basic grooming equipment and supplies</li>
  </ul> <br/>
  <li>Other expenditures may not be required but are highly recommended:</li>
  <ul>
    <li>Permanent identification, such as a microchip or tattoo</li>
    <li>Additional grooming supplies or professional grooming (depending on your new cat's needs)</li>
    <li>A spare collar or leash</li>
    <li>A bed and toys</li>
    <li>A crate or carrier</li>
  </ul> <br/>
  <li>Unexpected costs: Accidents and illness can result in costly emergency veterinary care. Recovery tools for finding a missing cat can include posters and rewards.</li><br/>
  <li>A cat with special physical or behavioral challenges may require specialized professional support to overcome any obstacles these issues present.</li>
</ul>
<br /><br />

<!-- Time Considerations section -->
<h2>Time Considerations:</h2><br />
<ul style="font-size: 25px;">
  <li>Cats need to be fed two to three times a day, more often in the case of kittens, and need a constant supply of fresh water.</li>
  <li>A responsible cat parent should spend at least one hour per day giving direct attention to his or her cat. This may include training, exercising, grooming, and playing or, with cats, it may just be lap time on the couch. Cats will need to use the litter box several times a day.</li>
  <li>A cat with an abundance of energy needs more time to play and interactive toys to keep them entertained.</li>
  <li>Cats with long coats may need grooming to prevent matting.</li>
  <li>Cats with certain medical conditions may need additional attention, including specifically timed injections in the case of diabetic animals.</li>
  <li>Remember that adopted cats may need additional bonding and reassurance time in the early weeks.</li>
</ul>
<br /><br />

    <!-- Shopping Checklist section -->
    <h2>Shopping Checklist:</h2><br />
    <p style="font-size: 25px;">
      It may be a good idea to wait until you select your new cat before you begin shopping for supplies. For example, some items, such as food and water bowls or collars and harnesses, depend upon the size of the dog you will be adopting.
    </p>
    <br />
    <p style="font-size: 25px;">
      Also, be sure to find out which food your cat was eating in the shelter or foster home so that you can provide the same in the beginning, again to ease the transition. After the cat has settled in, talk with your veterinarian about switching to the food of your choice.
    </p>
    <br />
    <p style="font-size: 25px;">
      Once you've selected your cat, here's a checklist of supplies you may need:
    </p>
    <br />
    <ul style="font-size: 25px;">
      <h2>Necessary Items for Cats:</h2>
      <li>Food and water bowls</li>
      <li>Food (canned and/or dry)</li>
      <li>Collar</li>
      <li>Litter Box and Scooper</li>
      <li>ID tag with your phone number</li>
      <li>Hard plastic carrier or foldable metal crate</li>
      <li>Cat bed</li>
      <li>Nail clippers</li>
      <li>Feline toothbrush and toothpaste</li>
      <li>Brush or comb (depends on your cat's coat length and type)</li>
      <li>Super-absorbent paper towels</li>
      <li>Sponge and scrub brush</li>
      <li>Non-toxic cleanser</li>
      <li>Enzymatic odor neutralizer</li>
      <li>Variety of toys (toys including catnip are a favorite)</li>
      <li>First-aid supplies</li>

    </ul>

</section>
    <br/>  <br/>  <br/>  <br/>    
  </MDBContainer>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { MDBContainer } from 'mdb-vue-ui-kit';

import adoptersOne from '@/assets/Home/FurCareGuide/FirstTimeAdopters/1.png'

export default defineComponent({
    name: "FirstTimeAdoptersContent2",
    data(){
        return {
            adoptersOne
        }
    },
    components: {
        MDBContainer
    }
})
</script>