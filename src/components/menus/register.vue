<template>
    <v-container fluid class="register-page">
        <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" sm="10" md="6" lg="4">
                <v-card class="pb-6 pl-6 pr-6 " elevation="0" border>
                    <!-- Logo -->

                    <div class="text-center mt-0">
                        <v-img src="@/assets/logo-img.png" alt="Logo" width="350" height="178" max-width="450" contain
                            class="mx-auto " />
                    </div>

                    <div>
                        <p class="text-body-1 mb-3 font-weight-bold">
                            Crie sua conta para continuar:
                        </p>
                    </div>

                    <!-- Formulário -->
                    <v-form @submit.prevent="handleRegister">
                        <v-text-field v-model="name" label="Nome completo" type="text"
                            prepend-inner-icon="mdi-account-outline" variant="outlined" density="comfortable"
                            hide-details="auto" class="mb-4" />

                        <v-text-field v-model="email" label="E-mail" type="email" prepend-inner-icon="mdi-email-outline"
                            variant="outlined" density="comfortable" hide-details="auto" class="mb-4" />

                        <v-text-field v-model="password" label="Senha" :type="showPassword ? 'text' : 'password'"
                            prepend-inner-icon="mdi-lock-outline"
                            :append-inner-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                            variant="outlined" density="comfortable" hide-details="auto" class="mb-4"
                            @click:append-inner="showPassword = !showPassword" />

                        <v-text-field v-model="confirmPassword" label="Confirmar senha"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            prepend-inner-icon="mdi-lock-check-outline"
                            :append-inner-icon="showConfirmPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                            variant="outlined" density="comfortable" hide-details="auto" class="mb-5"
                            @click:append-inner="showConfirmPassword = !showConfirmPassword" />

                        <v-btn type="submit" color="black" size="large" block class="text-none mb-4">
                            Criar conta
                        </v-btn>

                        <v-btn variant="outlined" size="large" block class="text-none" :to="{ name: 'login' }">
                            Já tenho conta
                        </v-btn>
                    </v-form>

                    <v-divider class="my-6" />

                    <div class="text-center">
                        <span class="text-body-2 text-grey">
                            Quer voltar para a loja?
                        </span>

                        <v-btn variant="text" class="text-none font-weight-bold" :to="{ name: 'home' }">
                            Voltar
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)

function handleRegister() {
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
        return
    }

    if (password.value !== confirmPassword.value) {
        return
    }

    // Cadastro fake 
    router.push({ name: 'home' })
}
</script>

<style scoped>
.register-page {
    min-height: calc(70vh - 64px);
    background: #f7f7f7;
}

.register-card {
    border-radius: 18px;
}

@media (max-width: 600px) {
    .register-card {
        padding: 24px !important;
    }
}
</style>