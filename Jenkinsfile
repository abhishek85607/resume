pipeline {
    agent { label 'Redhat_Slave' }
    stages {
        stage('Professional Build') {
            steps {
                script {
                    try {
                        sh "sudo docker build -t vicky-image ."
                        echo "Build Successful!"
                    } catch (Exception e) {
                        echo "Bhai, build fail ho gaya! Error: ${e.getMessage()}"
                        error("Stopping pipeline due to build failure.")
                    }
                }
            }
        }
    }
}
