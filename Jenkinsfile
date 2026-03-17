pipeline {
    agent { label 'Redhat_Slave' } // Ye tumhare Linux slave ko target karega

    stages {
        stage('Cleanup') {
            steps {
                echo 'Removing old container if exists...'
                // Linux mein 'sh' use hota hai
                sh 'sudo docker rm -f vicky-container || true'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building new image on RedHat...'
                sh 'sudo docker build -t vicky-image .'
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Starting container on Port 8080...'
                sh 'sudo docker run -d --name vicky-container -p 8080:3000 vicky-image'
            }
        }
    }

    post {
        success {
            echo 'Bhai, RedHat pe Docker ekdum mast chal gaya!'
        }
        failure {
            echo 'Kuch gadbad hai, Linux logs check karo.'
        }
    }
}
