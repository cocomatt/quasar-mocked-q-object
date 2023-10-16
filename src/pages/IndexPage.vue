<template>
  <div>
    <div class="q-pa-md secondary-font text-white text-body1">
      <p>
        This is your dashboard.
      </p>
      <div class="row items-start">
        <div>
          <q-btn-dropdown
            color="primary"
            :label="'Profiles'"
            dropdown-icon="fa-solid fa-caret-down">
            <q-list>
              <q-item
                v-close-popup
                clickable
                :to="{ name: 'app-profile' }">
                <q-item-section>
                  <q-item-label>
                    Your App Profile
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-close-popup
                clickable
                :to="{ name: 'auth-profile' }">
                <q-item-section>
                  <q-item-label>
                    Your Auth Profile
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-close-popup
                clickable
                :to="{ name: 'profiles' }">
                <q-item-section>
                  <q-item-label>
                    All App Profiles
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
