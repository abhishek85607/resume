pipeline {
    agent { label 'Redhat_Slave' } // Sirf RedHat pe chalega
    
    environment {
        APP_NAME = "vicky-resume-app"
        IMAGE_NAME = "vicky-image"
        PORT = "8080"
    }

    stages {
        stage('Initialize') {
            steps {
                echo "Bhai, deployment shuru ho rahi hai for ${APP_NAME}..."
            }
        }

        stage('Cleanup Old Container') {
            steps {
                sh "sudo docker rm -f ${APP_NAME} || true"
            }
        }

        stage('Build Image') {
            steps {
                sh "sudo docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('User Approval') {
            steps {
                // Ye line Jenkins ko rok degi jab tak tum button nahi dabaoge
                input message: "Abhishek, kya sab sahi hai? Port ${PORT} pe deploy karun?", ok: "Haan Bhai, Kar do!"
            }
        }

        stage('Deploy to Production') {
            steps {
                sh "sudo docker run -d --name ${APP_NAME} -p ${PORT}:3000 ${IMAGE_NAME}"
                echo "App is live on http://10.178.224.8:${PORT}"
            }
        }
    }

    post {
        always {
            echo "Pipeline khatam! Cleaning workspace..."
            deleteDir() // Ye folder saaf kar dega taaki storage na bhare
        }
        success {
            echo "Party time! Build ekdum mast raha."
        }
        failure {
            echo "Bhai, error aa gaya. Shoulder pump kam toh nahi ho gaya? Check karo logs!"
        }
    }
}
