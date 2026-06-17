<template>
    <v-container fluid class="login-page">
        <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" sm="10" md="6" lg="4">
                <v-card class="pb-6 pl-6 pr-6 mt-0" elevation="0" border>
                    <div class="text-center mt-0">
                        <v-img src="@/assets/logo-img.png" alt="Logo" width="350" height="178" max-width="450" contain
                            class="mx-auto " />
                    </div>
                    <div>
                        <p class="text-body-1 mb-3 font-weight-bold">
                            Entre na sua conta para continuar:
                        </p>
                    </div>

                    <v-form @submit.prevent="handleLogin">
                        <v-text-field v-model="email" label="E-mail" type="email" prepend-inner-icon="mdi-email-outline"
                            variant="outlined" density="comfortable" hide-details="auto" class="mb-4" />

                        <v-text-field v-model="password" label="Senha" :type="showPassword ? 'text' : 'password'"
                            prepend-inner-icon="mdi-lock-outline"
                            :append-inner-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                            variant="outlined" density="comfortable" hide-details="auto" class="mb-2"
                            @click:append-inner="showPassword = !showPassword" />

                        <div class="d-flex align-center justify-space-between mb-5">
                            <v-checkbox v-model="rememberMe" label="Lembrar-me" density="compact" hide-details />

                            <v-btn variant="text" size="small" class="text-none">
                                Esqueci minha senha
                            </v-btn>
                        </div>

                        <v-btn type="submit" color="black" size="large" block class="text-none mb-4">
                            Entrar
                        </v-btn>

                        <v-btn variant="outlined" size="large" block class="text-none" to="/">
                            Voltar para loja
                        </v-btn>
                    </v-form>

                    <v-divider class="my-6" />


                    <div class="text-center">
                        <span class="text-body-2">
                            Ainda não tem conta?
                        </span>

                        <v-btn variant="text" to="register" class="text-none ">
                            Criar conta
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

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

function handleLogin() {
    if (!email.value || !password.value) {
        return
    }

    // Login fake 
    router.push({ name: 'home' })
}
</script>

<style scoped>
.login-page {
    min-height: calc(70vh - 64px);
    background: #f7f7f7;
}

@media (max-width: 600px) {
    .login-card {
        padding: 24px !important;
    }
}
</style>