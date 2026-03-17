pipeline {
    agent { label 'Redhat_Slave' }
    
    environment {
        APP_NAME = "vicky-resume-app"
        IMAGE_NAME = "vicky-image"
        PORT = "8080"
        MY_EMAIL = "abhishek@example.com" // Yahan apni asli email dalo
    }

    stages {
        stage('Initialize') {
            steps {
                echo "Bhai, deployment shuru ho rahi hai..."
            }
        }

        stage('Build & Prep') {
            steps {
                sh "sudo docker rm -f ${APP_NAME} || true"
                sh "sudo docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Wait for Approval') {
            steps {
                // Pehle mail bhejo, phir ruko
                script {
                    emailext (
                        to: "${env.MY_EMAIL}",
                        subject: "PENDING: Approval Needed for Build #${env.BUILD_NUMBER}",
                        body: """Bhai Abhishek, 
                        Docker image ready hai. 
                        Check karo aur yahan click karke approve karo: ${env.BUILD_URL}
                        Port: ${env.PORT}""",
                        recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                    )
                }
                
                input message: "Abhishek, mail check karo aur yahan OK dabao!", ok: "Deploy Now"
            }
        }

        stage('Deploy') {
            steps {
                sh "sudo docker run -d --name ${APP_NAME} -p ${PORT}:3000 ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            emailext (
                to: "${env.MY_EMAIL}",
                subject: "SUCCESS: Build #${env.BUILD_NUMBER} is Live!",
                body: "Mubarak ho! App live ho gayi hai port ${PORT} pe."
            )
        }
        failure {
            emailext (
                to: "${env.MY_EMAIL}",
                subject: "FAILED: Build #${env.BUILD_NUMBER}",
                body: "Bhai, kuch gadbad ho gayi. Logs dekho: ${env.BUILD_URL}console"
            )
        }
    }
}pipeline {
    agent { label 'Redhat_Slave' }
    
    environment {
        APP_NAME = "vicky-resume-app"
        IMAGE_NAME = "vicky-image"
        PORT = "8080"
        MY_EMAIL = "abhishekraj1003046665@gmail.com" // Yahan apni asli email dalo
    }

    stages {
        stage('Initialize') {
            steps {
                echo "Bhai, deployment shuru ho rahi hai..."
            }
        }

        stage('Build & Prep') {
            steps {
                sh "sudo docker rm -f ${APP_NAME} || true"
                sh "sudo docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Wait for Approval') {
            steps {
                // Pehle mail bhejo, phir ruko
                script {
                    emailext (
                        to: "${env.MY_EMAIL}",
                        subject: "PENDING: Approval Needed for Build #${env.BUILD_NUMBER}",
                        body: """Bhai Abhishek, 
                        Docker image ready hai. 
                        Check karo aur yahan click karke approve karo: ${env.BUILD_URL}
                        Port: ${env.PORT}""",
                        recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                    )
                }
                
                input message: "Abhishek, mail check karo aur yahan OK dabao!", ok: "Deploy Now"
            }
        }

        stage('Deploy') {
            steps {
                sh "sudo docker run -d --name ${APP_NAME} -p ${PORT}:3000 ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            emailext (
                to: "${env.MY_EMAIL}",
                subject: "SUCCESS: Build #${env.BUILD_NUMBER} is Live!",
                body: "Mubarak ho! App live ho gayi hai port ${PORT} pe."
            )
        }
        failure {
            emailext (
                to: "${env.MY_EMAIL}",
                subject: "FAILED: Build #${env.BUILD_NUMBER}",
                body: "Bhai, kuch gadbad ho gayi. Logs dekho: ${env.BUILD_URL}console"
            )
        }
    }
}
