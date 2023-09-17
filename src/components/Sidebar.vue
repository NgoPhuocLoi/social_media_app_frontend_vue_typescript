<script setup lang="ts">
import HomeIcon from './icons/HomeIcon.vue';
import LightBulbIcon from './icons/LightBulbIcon.vue';
import VideoIcon from './icons/VideoIcon.vue';

const menuItems = [
    {
        name: "Home",
        Icon: HomeIcon
    },
    {
        name: "Videos",
        Icon: VideoIcon
    },
    {
        name: "FAQ",
        Icon: LightBulbIcon
    }
]

</script>

<template>
    <nav class="w-[240px] mr-4 ">
        <ul>
            <li class="flex px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer" v-for="{name, Icon} in menuItems" :key="name">
                <span class=" block mr-2 ml-[-8px]">
                    <component :is="Icon"/>
                </span>
                <a href="#">{{name}}</a>
            </li>

            
        </ul>
    </nav>
</template>