<template>
    <v-content
      style="padding: 0px 0px 7px 0px;"  
    >
    <template>
  <v-card
    color="#FFFFFF"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
       color="grey"
        large
        left
      >
        mdi-briefcase-outline
      </v-icon>

      <span class="title font-weight-light" style="color:grey">Project Name</span>
     
     <v-layout align-end justify-end>
       <v-icon
        color="yellow"
     >mdi-alert-outline</v-icon>
      <v-icon
        color="grey"
      >mdi-dots-vertical</v-icon>
     </v-layout>
          
    </v-card-title>

    <v-card-actions>
      <v-list-item>
        <v-list-item-avatar color="grey darken-3">
          <v-img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
          
        </v-list-item-avatar>

        <v-list-item-avatar color="grey darken-3">
          <v-img
            src="https://avataaars.io"
          ></v-img>
          
        </v-list-item-avatar>

        

      </v-list-item>
    </v-card-actions>

    <v-progress-linear
                color="#76D72B"
                buffer-value="0"
                value="30"
                ltr
              ></v-progress-linear>

  </v-card>
</template>
    </v-content>
</template>
