<script setup lang="ts">
import { onMounted, ref } from 'vue';
// Initialize and add the map
let map;

onMounted(()=>{
    initMap();
})

const mapDiv = ref<HTMLElement | null> (null);
async function initMap(): Promise<void> {
    // The location of New paltz
    const position = { lat: -41.751413703169256, lng: -74.08852850892997 };

    map = new google.maps.Map(
        mapDiv.value,
        {
            zoom: 14,
            center: position,
            mapId: 'DEMO_MAP_ID',
        }
    );

    const marker = new google.maps.Marker({
        map: map,
        position: { lat: 41.743377985135304, lng: -74.08396255321524 },
        title: 'Our Classroom'
    });
}
</script>

<script lang="ts">
    declare const google:any;
</script>

<template>
    <div>
        <h1 class="title">
            Store locations
        </h1>
        <div id="map" ref="mapDiv">

        </div>
    </div>
</template>

<style scoped>
#map {
    height: calc(100vh - 116px);
}
</style>