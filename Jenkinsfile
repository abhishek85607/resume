pipeline {
    agent { label 'Redhat_Slave' }
    
    environment {
        APP_NAME = "vicky-resume-app"
        IMAGE_NAME = "vicky-image"
        PORT = "8080"
        MY_EMAIL = "abhishekraj1003046665@gmail.com" 
    }

    stages {
        stage('Initialize') {
            steps {
                echo "Bhai, deployment shuru ho rahi hai..."
            }
        }

        stage('Build & Prep') {
            steps {
                sh "sudo docker rm -f ${env.APP_NAME} || true"
                sh "sudo docker build -t ${env.IMAGE_NAME} ."
            }
        }

        stage('Email Notification') {
            steps {
                echo "Abhishek ko mail bhej raha hoon..."
                emailext (
                    to: "${env.MY_EMAIL}",
                    subject: "WAITING: Approval needed for Build #${env.BUILD_NUMBER}",
                    body: """Bhai Abhishek, 
                    Docker image taiyar hai. 
                    Abhi check karo aur approve karo: ${env.BUILD_URL}
                    Port: ${env.PORT}""",
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                )
            }
        }

        stage('User Approval') {
            steps {
                input message: "Abhishek, kya sab sahi hai? Port ${PORT} pe deploy karun?", ok: "Haan Bhai, Kar do!"
            }
        }

        stage('Deploy to Production') {
            steps {
                sh "sudo docker run -d --name ${env.APP_NAME} -p ${env.PORT}:3000 ${env.IMAGE_NAME}"
                echo "App is live on http://10.178.224.8:${PORT}"
            }
        }
    }

    post {
        always {
            echo "Pipeline khatam! Cleaning workspace..."
            deleteDir()
        }
        success {
            emailext (
                to: "${env.MY_EMAIL}",
                subject: "SUCCESS: Build #${env.BUILD_NUMBER} is Live!",
                body: "Party time! App live ho gayi hai port ${PORT} pe."
            )
        }
        failure {
            emailext (
                to: "${env.MY_EMAIL}",
                subject: "FAILED: Build #${env.BUILD_NUMBER}",
                body: "Bhai, kuch gadbad ho gayi. Logs dekho: ${env.BUILD_URL}"
            )
        }
    }
}
